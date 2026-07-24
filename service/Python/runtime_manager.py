import os
import sys
import shutil


#Recibe la ruta de la seed
rutaSeed = sys.argv[1]

#Crea nuestro entorno runtime
runtime = "/tmp/proyecto-paradigmas-equipo4/runtime"

#Crea la carpeta del Runtime si no existe
os.makedirs(runtime, exist_ok=True)

#Crea la carpeta de los backups (dentro de runtime) si no existe
backups = os.path.join(runtime, "backups")
os.makedirs(backups, exist_ok=True)

#Ruta de la base en uso
db_runtime = os.path.join(runtime, "db.pl")

#Si no existe, copia la semilla
if not (os.path.exists(db_runtime)):
    shutil.copy(rutaSeed, db_runtime)

respuesta = {
    'Estado': 'Listo'
}

print (respuesta)