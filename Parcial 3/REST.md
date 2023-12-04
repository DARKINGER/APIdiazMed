# Principios y Restricciones de la Arquitectura REST

## Interfaz Uniforme

La interfaz uniforme en la arquitectura REST recomienda el uso de HTTP 1.1 como interfaz de aplicación. Este protocolo define métodos abstractos de transferencia de recursos, normalizando operaciones a POST, GET, PUT y DELETE para garantizar consistencia y simplicidad en la comunicación.

## Sin Estado

El principio "sin estado" implica que cada solicitud contiene toda la información necesaria para el servidor, prescindiendo de dependencias de solicitudes previas. Este enfoque contribuye a la escalabilidad y la tolerancia a fallos al liberar al sistema de la necesidad de mantener un estado de sesión.

## Cacheable

La capacidad de ser "cacheable" es crucial en REST. Las respuestas deben definir claramente sus políticas de almacenamiento en caché mediante encabezados como Cache-Control. Esta práctica mejora el rendimiento al permitir el almacenamiento en caché de resultados y reduce la carga en el servidor.

## Sistemas en Capas

El diseño de sistemas en capas aboga por la creación de niveles independientes, donde cada capa no necesita conocer detalles específicos de las demás. Esta separación facilita la gestión y el mantenimiento de componentes individuales.

## Codificación Intercambiable

La "codificación intercambiable" se refiere a la preferencia de formatos de datos genéricos, como JSON o XML. Esto posibilita que clientes y servidores utilicen lenguajes de programación diferentes, promoviendo la interoperabilidad en entornos heterogéneos.

## Sistemas Hipermedia

Los "sistemas hipermedia" son fundamentales para REST, ya que los recursos se mapean y relacionan mediante URIs. Esto facilita la automatización del manejo de recursos y permite la navegación dinámica entre diferentes representaciones.

## Arquitectura Basada en Recursos

La arquitectura basada en recursos implica que el acceso a datos e información se realiza exclusivamente a través de representaciones de recursos identificables mediante URIs únicas. Esto contribuye a la consistencia y simplicidad en la gestión de la información distribuida.

En resumen, REST busca maximizar el escalado, rendimiento y evolución de sistemas distribuidos mediante la adopción de protocolos y patrones basados en recursos identificables.
