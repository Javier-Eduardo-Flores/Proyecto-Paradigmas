
/*
estudiante(NombreCompleto,Numero de cuenta,correo)
*/
estudiante('Javier Eduardo Flores Valladares','20221002840','flores.javier@unah.hn').
estudiante('Jose Eduardo Suarez Valdez','20211003860','jose.valdez@unah.hn').
estudiante('Maria Jose Castillo Lopez','20211001850','maria.castillo@unah.hn').
estudiante('Mario Josue Cruz Ochoa','20231001441','mario.cruz@unah.hn').
estudiante('Josue Manuel Espinal Flores','20241004845','josue.espinal@unah.hn').
estudiante('Kevin Omar Morales Pineda','20231002241','kevin.morales@unah.hn').
estudiante('Brayan David Perdomo Salgado','20211002341','brayan.salgado@unah.hn').
estudiante('Claudia Patricia Morales Zelaya','20221002243','claudia.zelaya@unah.hn').
estudiante('Mercedes Paola Lagos Caceres','20241002821','mercedes.lagos@unah.hn').
estudiante('Jeremy Alfredo Jimenes Alfaro','20231001834','alfredo.alfaro@unah.hn').
estudiante('Alejandro Manuel Flores Suazo','20201002174','alejandro.suazo@unah.hn').
estudiante('Mauricio Joel Perez Dominguez','20251007883','mauricio.dominguez@unah.hn').
estudiante('Allan Daniel Mendez Mendoza','20251002314','allan.mendez@unah.hn').
estudiante('Victor Fernando Mejia Ramos','20241002864','victor.mejia@unah.hn').
estudiante('Daniela Elizabeth Osorio Caceres','20261002647','daniela.osorio@unah.hn').
estudiante('Lucia Fernanda Mejia Perdomo','20261002149','lucia.mejia@unah.hn').
estudiante('Brenda Mariel Garcia Herrera','20201002341','brenda.mariel@unah.hn').
estudiante('Samuel Edgardo Matamoros Paz','20231004841','samuel.matamoros@unah.hn').
estudiante('Pedro Fabian Gonzales Porro','20261001407','pedro.porro@unah.hn').
estudiante('Vanessa Yamileth Toro Coello','20251002560','vanessa.toro@unah.hn').


/*
profesor(NombreCompleto,Numero de Identidad,correo)
*/
profesor('Carlos Jose Estrada Matamoro','0801198801452','carlos.estrada@unah.edu.hn').
profesor('Sofia Martinez Lopez','0501199002341','sofia.martinez@unah.edu.hn').
profesor('Fernando Alonso Gomez Cruz','0101198000892','fernando.gomez@unah.edu.hn').
profesor('Ricardo Andres Morales Mendoza','0801197803415','ricardo.morales@unah.edu.hn').
profesor('Jorge Luis Reyes Padilla','1804197001123','jorge.reyes@unah.edu.hn').
profesor('Ana Manuela Castro Rivera','0801197604567','ana.castro.r@unah.edu.hn').
profesor('Marcos Omar Morales Pineda','0601198201890','omar.morales@unah.edu.hn').
profesor('Franklin Joel Dubon Caballero','0801197902104','frankin.caballero@unah.edu.hn').
profesor('Axel Roberto Zelaya Ortiz','1501198605678','axel.ortiz@unah.edu.hn').
profesor('Sonia Raquel Morales Calderon','0501197403891','sonia.calderon@unah.edu.hn').
profesor('Jairo Alexander Sierra Andrade','0801198502903','jairo.sierra@unah.edu.hn').
profesor('Erika Yaneth Benítez Osorio','0301197104125','erika.benitez@unah.edu.hn').


/*
asignatura (codigoClase,Nombre de la asignatura,UV)
*/

asignatura('ISC-101','Introduccion a la Ingenieria en Sistemas Computacionales',4).
asignatura('ISC-102','Programacion Estructura',4).
asignatura('ISC-103','Programacion Orientada a Objetos',4).
asignatura('ISC-204','Paradigmas de Programacion',4).
asignatura('ISC-211','Estructuras de Datos',4).
asignatura('IE-326','Instalaciones Eléctricas para centros de Datos',4).
asignatura('ISC-321','Fundamentos de Bases de Datos',5).
asignatura('ISC-351','Contabilidad Financiera',4).
asignatura('ISC-331','Redes de Datos I',4).
asignatura('ISC-333','Sistemas Operativos I',4).
asignatura('ISC-312','Teoria de la Computacion',4).
asignatura('ISC-341','Sistemas de Informacion',4).
asignatura('ISC-332','Redes de Datos II',4).
asignatura('ISC-334','Sistemas Operativos II',4).
asignatura('ISC-305','Programacion Web',4).
asignatura('ISC-313','Compiladores',4).
asignatura('ISC-306','Analisis de Requerimientos',4).
asignatura('ISC-336','Diseño Digital',4).
asignatura('ISC-407','Programacion Movil',5).
asignatura('ISC-414','Inteligencia Artificial',4).
asignatura('ISC-435','Administracion de Servidores',4).
asignatura('ISC-437','Arquitectura de Computadoras',4).
asignatura('ISC-408','Ingenieria de Software',4).
asignatura('ISC-422','Administracion de Bases de Datos',4).
asignatura('ISC-442','Seguridad Informatica',4).
asignatura('ISC-443','Industria de TI',4).
asignatura('ISC-409','Calidad de Software',4).
asignatura('ISC-423','Ciencia de Datos',4).
asignatura('ISC-415','Tecnologias Emergentes',4).
asignatura('ISC-445','Proyectos de TI',4).
asignatura('ISC-552','Seminario de Investigacion',4).
asignatura('ISC-544','Auditoria Informatica',4).
asignatura('ISC-546','Ejecucion de Proyectos de TI',4).
asignatura('MM-420','Matematicas Discretas',4).
asignatura('FS-200','Fisica General II',5).
asignatura('AGE-120','Administracion',4).


asignaturasCarrera(['ISC-101','ISC-102','ISC-103','ISC-204','ISC-211','IE-326','ISC-321',
'ISC-351','ISC-331','ISC-333','ISC-312','ISC-341','ISC-332','ISC-334','ISC-305','ISC-313',
'ISC-306','ISC-336','ISC-407','ISC-414','ISC-435','ISC-437','ISC-408','ISC-422','ISC-442',
'ISC-443','ISC-409','ISC-423','ISC-415','ISC-445','ISC-552','ISC-544','ISC-546','MM-420','FS-200','AGE-120'
])
/*
requisitos (Clase,requisito1,requisito2,requisito3,requisito4).
*/

requisitos('ISC-101',[]).
requisitos('ISC-102',['ISC-101']).
requisitos('ISC-103',['ISC-102']).
requisitos('ISC-204',['ISC-103']).
requisitos('ISC-211',['MM-420']).
requisitos('IE-326',['FS-200']).
requisitos('ISC-321',['MM-420']).
requisitos('ISC-351',['AGE-102']).
requisitos('ISC-331',['IE-326']).
requisitos('ISC-333',['ISC-211']).
requisitos('ISC-312',['ISC-211','ISC-321']).
requisitos('ISC-334',['ISC-333']).
requisitos('ISC-313',['ISC-312']).
requisitos('ISC-306',['ISC-341','ISC-321']).
requisitos('ISC-336',['ISC-334']).
requisitos('ISC-407',['ISC-305']).
requisitos('ISC-414',['ISC-313','MM-401']).
requisitos('ISC-435',['ISC-334','ISC-332']).
requisitos('ISC-437',['ISC-336']).
requisitos('ISC-408',['ISC-306','ISC-407']).
requisitos('ISC-422',['ISC-321']).
requisitos('ISC-442',['ISC-435']).
requisitos('ISC-443',['ISC-306']).
requisitos('ISC-409',['ISC-408']).
requisitos('ISC-423',['ISC-422']).
requisitos('ISC-415',['ISC-305','ISC-437','ISC-332']).
requisitos('ISC-445',['ISC-443','ISC-442']).
requisitos('ISC-552',['ISC-415','ISC-445','ISC-423']).
requisitos('ISC-544',['ISC-442','ISC-306']).
requisitos('ISC-546',['ISC-445']).

/*
aula(numeroAula,Piso,tipoAula)
*/

aula('101','P1','aula').
aula('105','P1','aula').
aula('202','P2','Lab').
aula('205','P2','Lab').
aula('305','P3','aula').
aula('302','P3','aula').
aula('401','P4','Lab').
aula('403','P4','Lab').
aula('402','P4','aula').

/*
clase(codigoClase,DNI profesor,numero de cuenta estudiante,calificacion estudiante)
*/

%estudiante1

clase('ISC-101','0801198801452','20221002840',82).
clase('ISC-102','0501199002341','20221002840',80).
clase('ISC-103','0601198201890','20221002840',86).
clase('ISC-204','0801197803415','20221002840',70).
clase('ISC-211','0301197104125','20221002840',75).
clase('IE-326','0301197104125','20221002840',68).
clase('ISC-321','0801197604567','20221002840',90).
clase('ISC-351','0501199002341','20221002840',81).
clase('ISC-333','1804197001123','20221002840',82).
clase('ISC-334','1501198605678','20221002840',69).

%estudiante2
clase('ISC-101','0801198801452','20211003860',89).
clase('ISC-102','0501199002341','20211003860',81).
clase('ISC-103','0601198201890','20211003860',82).
clase('ISC-204','0801197803415','20211003860',74).
clase('ISC-211','0301197104125','20211003860',78).
clase('IE-326','0301197104125','20211003860',78).
clase('ISC-321','0801197604567','20211003860',81).
clase('ISC-351','0501199002341','20211003860',71).
clase('ISC-333','1804197001123','20211003860',72).
clase('ISC-334','1501198605678','20211003860',89).
clase('ISC-313','0301197104125','20211003860',68).
clase('ISC-306','0101198000892','20211003860',81).
clase('ISC-336','0801198502903','20211003860',79).
clase('ISC-407','1804197001123','20211003860',90).
clase('ISC-414','0801198502903','20211003860',78).
clase('ISC-435','1501198605678','20211003860',89).
clase('ISC-437','0801197902104','20211003860',87).
clase('ISC-408','0601198201890','20211003860',65).
clase('ISC-422','0801197604567','20211003860',66).
clase('ISC-442','0801197803415','20211003860',79).
clase('ISC-443','0101198000892','20211003860',91).
clase('ISC-409','0801198801452','20211003860',90).
clase('ISC-423','0801197902104','20211003860',94).

%estudiante3

clase('ISC-101','0801198801452','20211001850',70).
clase('ISC-102','0501199002341','20211001850',90).
clase('ISC-103','0601198201890','20211001850',76).
clase('ISC-204','0801197803415','20211001850',80).
clase('ISC-211','0301197104125','20211001850',91).
clase('IE-326','0301197104125','20211001850',86).
clase('ISC-321','0801197604567','20211001850',66).
clase('ISC-351','0501199002341','20211001850',72).
clase('ISC-333','1804197001123','20211001850',74).
clase('ISC-334','1501198605678','20211001850',85).
clase('ISC-313','0301197104125','20211001850',78).
clase('ISC-306','0101198000892','20211001850',91).
clase('ISC-336','0801198502903','20211001850',92).
clase('ISC-407','1804197001123','20211001850',98).
clase('ISC-414','0801198502903','20211001850',81).
clase('ISC-435','1501198605678','20211001850',69).
clase('ISC-437','0801197902104','20211001850',67).

%estudiante4

clase('ISC-101','0801198801452','20231001441',85).
clase('ISC-102','0501199002341','20231001441',88).
clase('ISC-103','0601198201890','20231001441',78).
clase('ISC-204','0801197803415','20231001441',65).
clase('ISC-211','0301197104125','20231001441',75).
clase('IE-326','0301197104125','20231001441',68).
clase('ISC-321','0801197604567','20231001441',80).
clase('ISC-351','0501199002341','20231001441',66).
clase('ISC-333','1804197001123','20231001441',72).

%estudiante5
clase('ISC-101','0801198801452','20241004845',72).
clase('ISC-102','0501199002341','20241004845',90).
clase('ISC-103','0601198201890','20241004845',76).
clase('ISC-204','0801197803415','20241004845',65).
clase('ISC-211','0301197104125','20241004845',65).
clase('IE-326','0301197104125','20241004845',68).
clase('ISC-321','0801197604567','20241004845',70).

%estudiante6

clase('ISC-101','0801198801452','20231002241',65).
clase('ISC-102','0501199002341','20231002241',78).
clase('ISC-103','0601198201890','20231002241',88).
clase('ISC-204','0801197803415','20231002241',69).
clase('ISC-211','0301197104125','20231002241',79).
clase('IE-326','0301197104125','20231002241',98).
clase('ISC-321','0801197604567','20231002241',81).
clase('ISC-351','0501199002341','20231002241',69).

%estudiante7

clase('ISC-101','0801198801452','20211002341',72).
clase('ISC-102','0501199002341','20211002341',80).
clase('ISC-103','0601198201890','20211002341',66).
clase('ISC-204','0801197803415','20211002341',90).
clase('ISC-211','0301197104125','20211002341',71).
clase('IE-326','0301197104125','20211002341',66).
clase('ISC-321','0801197604567','20211002341',86).
clase('ISC-351','0501199002341','20211002341',72).
clase('ISC-333','1804197001123','20211002341',78).
clase('ISC-334','1501198605678','20211002341',95).
clase('ISC-313','0301197104125','20211002341',78).
clase('ISC-306','0101198000892','20211002341',95).
clase('ISC-336','0801198502903','20211002341',82).
clase('ISC-407','1804197001123','20211002341',88).

%estudiante8

clase('ISC-101','0801198801452','20221002243',79).
clase('ISC-102','0501199002341','20221002243',91).
clase('ISC-103','0601198201890','20221002243',86).
clase('ISC-204','0801197803415','20221002243',76).
clase('ISC-211','0301197104125','20221002243',98).
clase('IE-326','0301197104125','20221002243',68).
clase('ISC-321','0801197604567','20221002243',81).
clase('ISC-351','0501199002341','20221002243',78).
clase('ISC-333','1804197001123','20221002243',75).
clase('ISC-334','1501198605678','20221002243',85).
clase('ISC-313','0301197104125','20221002243',69).

%estudiante9

clase('ISC-101','0801198801452','20241002821',75).
clase('ISC-102','0501199002341','20241002821',68).
clase('ISC-103','0601198201890','20241002821',98).
clase('ISC-204','0801197803415','20241002821',85).
clase('ISC-211','0301197104125','20241002821',74).
clase('IE-326','0301197104125','20241002821',71).

%estudiante10

clase('ISC-101','0801198801452','20231001834',77).
clase('ISC-102','0501199002341','20231001834',92).
clase('ISC-103','0601198201890','20231001834',84).
clase('ISC-204','0801197803415','20231001834',72).
clase('ISC-211','0301197104125','20231001834',68).
clase('IE-326','0301197104125','20231001834',86).
clase('ISC-321','0801197604567','20231001834',71).
clase('ISC-351','0501199002341','20231001834',74).
clase('ISC-333','1804197001123','20231001834',95).

%estudiante11

clase('ISC-101','0801198801452','20201002174',70).
clase('ISC-102','0501199002341','20201002174',90).
clase('ISC-103','0601198201890','20201002174',76).
clase('ISC-204','0801197803415','20201002174',80).
clase('ISC-211','0301197104125','20201002174',91).
clase('IE-326','0301197104125','20201002174',86).
clase('ISC-321','0801197604567','20201002174',66).
clase('ISC-351','0501199002341','20201002174',72).
clase('ISC-333','1804197001123','20201002174',74).
clase('ISC-334','1501198605678','20201002174',85).
clase('ISC-313','0301197104125','20201002174',78).
clase('ISC-306','0101198000892','20201002174',91).
clase('ISC-336','0801198502903','20201002174',92).
clase('ISC-407','1804197001123','20201002174',98).
clase('ISC-414','0801198502903','20201002174',81).
clase('ISC-435','1501198605678','20201002174',69).
clase('ISC-437','0801197902104','20201002174',67).
clase('ISC-408','0601198201890','20201002174',76).
clase('ISC-422','0801197803415','20201002174',78).
clase('ISC-442','0801197604567','20201002174',90).
clase('ISC-443','0101198000892','20201002174',65).
clase('ISC-409','0801197902104','20201002174',89).
clase('ISC-423','1501198605678','20201002174',92).
clase('ISC-415','1804197001123','20201002174',88).
clase('ISC-445','0501199002341','20201002174',87).
clase('ISC-552','0601198201890','20201002174',76).
clase('ISC-544','0801197902104','20201002174',86).
clase('ISC-546','0101198000892','20201002174',79).

%estudiante12

clase('ISC-101','0801198801452','20251007883',80).
clase('ISC-102','0501199002341','20251007883',68).
clase('ISC-103','0601198201890','20251007883',86).
clase('ISC-204','0801197803415','20251007883',84).
clase('ISC-211','0301197104125','20251007883',81).

%estudiante13

clase('ISC-101','0801198801452','20251002314',70).
clase('ISC-102','0501199002341','20251002314',88).
clase('ISC-103','0601198201890','20251002314',83).
clase('ISC-204','0801197803415','20251002314',74).

%estudiante14

clase('ISC-101','0801198801452','20241002864',65).
clase('ISC-102','0501199002341','20241002864',78).
clase('ISC-103','0601198201890','20241002864',68).
clase('ISC-204','0801197803415','20241002864',65).
clase('ISC-211','0301197104125','20241002864',84).
clase('IE-326','0301197104125','20241002864',91).

%estudiante15

clase('ISC-101','0801198801452','20261002647',85).

%estudiante16

clase('ISC-101','0801198801452','20261002149',85).

%estudiante17

clase('ISC-101','0801198801452','20201002341',74).
clase('ISC-102','0501199002341','20201002341',80).
clase('ISC-103','0601198201890','20201002341',86).
clase('ISC-204','0801197803415','20201002341',83).
clase('ISC-211','0301197104125','20201002341',71).
clase('IE-326','0301197104125','20201002341',66).
clase('ISC-321','0801197604567','20201002341',69).
clase('ISC-351','0501199002341','20201002341',72).
clase('ISC-333','1804197001123','20201002341',74).
clase('ISC-334','1501198605678','20201002341',75).
clase('ISC-313','0301197104125','20201002341',79).
clase('ISC-306','0101198000892','20201002341',81).
clase('ISC-336','0801198502903','20201002341',98).
clase('ISC-407','1804197001123','20201002341',93).
clase('ISC-414','0801198502903','20201002341',82).
clase('ISC-435','1501198605678','20201002341',79).
clase('ISC-437','0801197902104','20201002341',77).
clase('ISC-408','0601198201890','20201002341',76).
clase('ISC-422','0801197803415','20201002341',88).
clase('ISC-442','0801197604567','20201002341',91).
clase('ISC-443','0101198000892','20201002341',66).
clase('ISC-409','0801197902104','20201002341',89).
clase('ISC-423','1501198605678','20201002341',94).
clase('ISC-415','1804197001123','20201002341',89).
clase('ISC-445','0501199002341','20201002341',67).
clase('ISC-552','0601198201890','20201002341',76).
clase('ISC-544','0801197902104','20201002341',89).
clase('ISC-546','0101198000892','20201002341',94).

%estudiante18

clase('ISC-101','0801198801452','20231004841',84).
clase('ISC-102','0501199002341','20231004841',86).
clase('ISC-103','0601198201890','20231004841',89).
clase('ISC-204','0801197803415','20231004841',93).
clase('ISC-211','0301197104125','20231004841',91).
clase('IE-326','0301197104125','20231004841',66).
clase('ISC-321','0801197604567','20231004841',69).
clase('ISC-351','0501199002341','20231004841',65).
clase('ISC-333','1804197001123','20231004841',65).

%estudiante19

clase('ISC-101','0801198801452','20261001407',86).

%estudiante20
clase('ISC-101','0801198801452','20251002560',74).
clase('ISC-102','0501199002341','20251002560',96).
clase('ISC-103','0601198201890','20251002560',89).

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
