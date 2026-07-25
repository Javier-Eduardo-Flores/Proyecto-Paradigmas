/**
Reglas en prolog, Recordar cambiarlas a un archivo en servicios
*/

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