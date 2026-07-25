/**
Reglas en prolog
@author flores.javier@unah.hn
*/

%reglas para consultar datos

profesor_estudiante(DNIProfesor,NombreEstudiante,CuentaEstudiante,CorreoEstudiante):-
    clase(_,DNIProfesor,CuentaEstudiante,_),
    estudiante(NombreEstudiante,CuentaEstudiante,CorreoEstudiante).


obtenerRequisito([Head| _],CodigoRequisito,NombreRequisito,UVRequisito):-
    asignatura(Head,NombreRequisito,UVRequisito),
    asignatura(CodigoRequisito,NombreRequisito,UVRequisito).
    
    
obtenerRequisito([_ |Tail],CodigoRequisito,NombreRequisito,UVRequisito):-
    obtenerRequisito(Tail,CodigoRequisito,NombreRequisito,UVRequisito).
    

requisitos_clase(CodigoClase,CodigoRequisito,NombreRequisito,UVRequisito):-
    requisitos(CodigoClase,ListaRequisitos),
    obtenerRequisito(ListaRequisitos,CodigoRequisito,NombreRequisito,UVRequisito).
  

clases_Estudiante(Cuenta,CodigoAsignatura,NombreAsignatura,Calificacion):-
    clase(CodigoAsignatura,_,Cuenta,Calificacion),
    asignatura(CodigoAsignatura,NombreAsignatura,_).


calificaciones_Clase(Clase,CuentaAlumno,NombreAlumno,CorreoAlumno,Nota):-
    clase(Clase,_,CuentaAlumno,Nota),
    estudiante(NombreAlumno,CuentaAlumno,CorreoAlumno).


%Reglas para generacion de estadisticas

'tamaño lista'([],0).
'tamaño lista'([_|Tail],Resultado):-
    'tamaño lista'(Tail,Resultado1),
    Resultado is Resultado1 + 1.
    
'suma lista'([],0).
'suma lista'([Head|Tail],Resultado):-
    'suma lista'(Tail,Resultado2),
    Resultado is Resultado2 + Head.


'promedio lista'(Lista,Promedio):-
    'suma lista'(Lista,Suma),
    'tamaño lista'(Lista,T),
    T > 0,
    Promedio is Suma/T.
    
promedioEstudiantes(NombreEstudiante,Cuenta,Promedio):-
    estudiante(NombreEstudiante,Cuenta,_),
	findall(Nota,clase(_,_,Cuenta,Nota),ListaNotas),
    'promedio lista'(ListaNotas,Promedio).
    

%Reglas Generacion de horarios

%Me retorna una lista con el codigo de todas las carreras
asignaturasCarrera(Lista):-
    findall(Codigo,asignatura(Codigo,_,_),Lista).

%Me retorna una lista con el codigo de las clases pasadas de un estudiante
clasesEstudiante(Lista,Estudiante):-
    findall(Codigo,clase(Codigo,_,Estudiante,_),Lista).

%Compara los requisitos con las clases pasadas de un alumnos
compararRequisitos([],_).

compararRequisitos([Head|Tail],Lista):-
    member(Head,Lista),
    compararRequisitos(Tail,Lista).

%Elimina las clases que ya paso un estudiante.
eliminarClasesPasadas([],_,[]).

eliminarClasesPasadas([Head|Tail],Lista,Resto):-
    member(Head,Lista),
    eliminarClasesPasadas(Tail,Lista,Resto).

eliminarClasesPasadas([Head|Tail],Lista,[Head|Resto]):-
    \+ member(Head,Lista),
    eliminarClasesPasadas(Tail,Lista,Resto).

%Eliminar duplicados de una lista
'Eliminar duplicados'([],[]).

'Eliminar duplicados'([Head|Tail],Resto):-
    member(Head,Tail),
	'Eliminar duplicados'(Tail,Resto).

'Eliminar duplicados'([Head|Tail],[Head|Resto]):-
    'Eliminar duplicados'(Tail,Resto).
    

%Retorna una lista con las clases que puede llevar un estudiante y las clases pasadas
'Clases totales estudiante'(Estudiante,ClasesTotales):-
    clasesEstudiante(ClasesPasadas,Estudiante),
    findall(Clase,(requisitos(Clase,RequisitosClase),compararRequisitos(RequisitosClase,ClasesPasadas)),ClasesTotales).


%Retorna las clases siguientes de un estudiante
'Clases siguientes estudiante'(Estudiante,ClasesSiguientes):-
    'Clases totales estudiante'(Estudiante,ClasesTotales),
    clasesEstudiante(ClasesPasadas,Estudiante),
    eliminarClasesPasadas(ClasesTotales,ClasesPasadas,ClasesSiguientes2),
    'Eliminar duplicados'(ClasesSiguientes2,ClasesSiguientes).

%Lista de con las cuentas de todos los estudiantes
'Cuentas estudiantes'(ListaCuentas):-
    findall(Cuenta,estudiante(_,Cuenta,_),ListaCuentas).


%Total de todas las clases por llevar de los estudiantes
'Total clases estudiantes'([],[]).

'Total clases estudiantes'([Head|Tail],[ClasesSiguientes|Resto]):-
    'Clases siguientes estudiante'(Head,ClasesSiguientes),
    'Total clases estudiantes'(Tail,Resto).



%Verifica si un elemento es una lista
'es una lista'([]).
'es una lista'([_ | _]).


'pegar listas'([],Lista2,Lista2).

'pegar listas'([Head|Tail],Lista2,[Head|Resto]):-
	'pegar listas'(Tail,Lista2,Resto).



'Aplanar lista'([],[]).

'Aplanar lista'([Head|Tail],[Head|Resto]):-
    \+'es una lista'(Head),
    'Aplanar lista'(Tail,Resto).

'Aplanar lista'([Head|Tail],Lista):-
    'es una lista'(Head),
    'Aplanar lista'(Head,HeadAplanado),
    'Aplanar lista'(Tail,TailAplanado),
    'pegar listas'(HeadAplanado,TailAplanado,Lista).
    


'Clases por abrir'(ListaClases):-
    'Cuentas estudiantes'(ListaCuentas),
    'Total clases estudiantes'(ListaCuentas,TotalClases),
    'Aplanar lista'(TotalClases,ClasesAplanadas),
    'Eliminar duplicados'(ClasesAplanadas,ListaClases).

'Obtener Clase'([Head|_],Head).

'Obtener Clase'([_|Tail],Clase):-
    'Obtener Clase'(Tail,Clase).

'Generar Secciones'(Clase,Profesor,Aula,Hora):-
    'Clases por abrir'(ClasesPorAbrir),
    'Obtener Clase'(ClasesPorAbrir,Clase),
    profesor(Profesor,_,_) ,
    aula(Aula,_,_) ,
    hora(Hora).

