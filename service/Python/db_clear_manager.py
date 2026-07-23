import sys
import os
import shutil
from datetime import datetime


backup_name = datetime.now().strftime("CDM_%y%m%d%H%M%S.pl")
ruta = sys.argv[1]

backup_path = os.path.join(os.path.dirname(ruta), "backups", backup_name)

shutil.copy(ruta, backup_path)

with open(ruta, "w") as db:
    pass

respuesta = {
    "Respaldo": backup_path,
    "Estado": "Exito"
}

print (respuesta)
