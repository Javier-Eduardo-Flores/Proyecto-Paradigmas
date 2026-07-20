"""
No olvidar agregar la firma de Inestroza
"""

import sys

tipo = sys.argv[1]
keys = sys.argv[2].split(",")

read_data = lambda: str(sys.stdin.read()).strip().split("\n")
process_item = lambda text: str(text).strip().split(",")

process_data = lambda array, keys: {
    tipo: [
        
    {
        f"{keys[key]}": f"{process_item(item)[key]}" 
        for key in range(len (keys))
    }
    for item in array
    ]
}


print(
    process_data(
    read_data(),
    keys)   
)