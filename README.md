# API REST Semáforo Wifi Docs
Aquí se detalla el uso de la API Rest del semáforo Wifi

## Access Points
Usado para obtener información de los Access Points a consultar.
 **Url** : `/aps`
**Método**: `GET`
**Autorización requerida**: No
**Envío de datos** 
```
{
	macAddress: '.full=true&.or_filter=true&ethernetMac="<ap.mac.ethernet>"&ethernetMac="<ap.mac.ethernet>"...
}
```

**Ejemplo**
```
{
	macAddress: '.full=true&.or_filter=true&ethernetMac="00:06:f6:6b:d9:86"&ethernetMac="84:3d:c6:6e:f2:94"&ethernetMac="f4:4e:05:ce:da:0c"&ethernetMac="e0:2f:6d:db:fc:5f"&ethernetMac="44:2b:03:91:24:44"&ethernetMac="00:42:68:f8:c2:6c"'
}
```
### Respuesta satisfactoria
**Código**: `200 OK`
**Contenido ejemplo**
```
```
### Respuesta errónea
**Código**: `500 Server Error`
