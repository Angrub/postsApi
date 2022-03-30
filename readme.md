# Mini red social
---
## Problema a resolver
Se requiere una aplicación web para la gestión de una pequeña comunidad, donde diferentes usuarios podrán subir contenido en forma de posts y dar like al contenido de otros usuarios.

#### Casos de uso
* Los usuarios podrán crear posts
* Los usuarios podrán dar like a los posts de otros usuarios

#### Out of Scope (casos de uso No Soportados)
* Un usuario no registrado no podrá crear posts ni ver los posts
* Un usuario sólo podrá crear, actualizar y eliminar posts relacionados a su cuenta
---
## Arquitectura

### Modelo de datos
Se conformará por 4 entidades:
1. Users
2. Posts
3. Follows
4. likes

![Diagrama físico](diagrama_fisico.svg)
---
### Estructura de directorio

...
