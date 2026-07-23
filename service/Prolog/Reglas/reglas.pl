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
  

ClaseXEstudiante(Cuenta,CodigAsignatura,NombreAsignatura,Calificacion):-
    clase(CodigoClase,_,Cuenta,Calificacion),
    asignatura(CodigoClase,NombreAsignatura,_).
