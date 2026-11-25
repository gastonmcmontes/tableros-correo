# Tablero de Control Móvil - Región PBA (Correo Argentino)

Aplicación móvil interactiva para el seguimiento operativo de los indicadores de calidad y cumplimiento de la **Región PBA (Provincia de Buenos Aires / La Pampa)** y sus **6 Nodos Logísticos**.

---

## 🎯 KPIs Incluidos y Objetivos

| KPI | Producto / Servicio | Objetivo Meta | Tipo de Métrica |
| :--- | :--- | :---: | :--- |
| **SLA Paq.AR** | Paquetería eCommerce | **95.0%** | Nivel de Servicio en Tiempo |
| **FV Paq.AR** | Paquetería eCommerce | **90.0%** | First Visit (Primera Visita Efectiva) |
| **SLA PAS** | Plataforma de Servicios | **95.0%** | Cumplimiento Operativo |
| **FV PAS** | Plataforma de Servicios | **90.0%** | First Visit (Primera Visita Efectiva) |
| **SLA Expreso** | Servicios Expresos | **95.0%** | Cumplimiento de Plazo |
| **FV Expreso** | Servicios Expresos | **90.0%** | OTIF / First Visit |

---

## 🕒 Indicadores de Auditoría y Sincronización en el Inicio

Al abrir la aplicación en el celular, en la parte superior se exhibe la tarjeta de estado de datos:
1. **Última Carga del Maestro:** Fecha y hora exacta de la última actualización del archivo Maestro (`13/11/2026 12:14 hs`).
2. **Última Búsqueda de Datos:** Momento exacto en el que el sistema fue a buscar y sincronizar los datos (`15/11/2026 14:28 hs`).

---

## 📲 Panel de Compartir a WhatsApp (Control Total para el Jefe de Operaciones)

El Jefe de Operaciones tiene control total para configurar la información a enviar antes de emitir el reporte:

### 1. Selección de Período:
- `[ 📊 Mes Consolidado ]` (Cierre mensual consolidado)
- `[ ⚡ Día Puro Anterior ]` (Última jornada hábil cerrada)

### 2. Alcance del Informe:
- **`[ 🌐 Todos los Nodos ]`**: Envía el reporte general con el consolidado PBA, el desglose de los 6 nodos con sus 6 KPIs individuales y la matriz comparativa.
- **`[ 📍 Un Nodo en Particular ]`**: Permite elegir qué nodo específico reportar (`BHI`, `LPG`, `MDQ`, `MER`, `PER` o `RSA`) generando un mensaje directo y enfocado para el jefe de ese nodo con sus resultados frente a las metas y frente al promedio de la región.
- **`[ 📑 Todos + Foco en un Nodo ]`**: Reporte integral de todos los nodos pero con un apartado destacado de foco sobre el nodo seleccionado (ideal para reuniones operativas).

### 3. Métodos de Envío:
- **`[ 📲 Abrir WhatsApp ]`**: Abre directamente WhatsApp con el texto y la tabla cargada.
- **`[ 🖼️ Bajar Placa PNG ]`**: Genera y descarga una infografía en alta resolución (1080x1520 px) para enviar como imagen/foto a los grupos de WhatsApp.
- **`[ 📋 Copiar Mensaje Gráfico ]`**: Copia todo el reporte al portapapeles.

---

## 🧭 Estructura del Zócalo de Navegación Inferior (4 Zócalos)

1. **1er Zócalo: Región**
   - Resumen ejecutivo consolidado de la Región PBA con los 6 KPIs y gráfico regional.

2. **2do Zócalo: Nodos** *(Detalle por Nodo)*
   - Carrusel táctil de los 6 nodos (`BHI`, `LPG`, `MDQ`, `MER`, `PER`, `RSA`).
   - 6 KPIs del nodo seleccionado y **gráfico evolutivo dinámico correspondiente a ese nodo**.

3. **3er Zócalo: Ranking** *(Ranking Interactivo por KPI)*
   - Tarjetas pequeñas superiores de cada KPI.
   - Despliegue del ranking de nodos (1º a 6º) con podio, medallas y barras de cumplimiento.

4. **4to Zócalo: Desvíos** *(Alertas y Focos de Gestión Operativa)*
   - Listado jerarquizado de brechas operativas ordenadas por mayor desvío vs meta (p. ej., `FV PAS en MDQ: -36.59% vs meta` con recomendación de reforzar 1ra visita).
   - Acciones recomendadas por tipo de indicador (auditoría en calle, reintentos, enlace troncal).
   - Botón directo para compartir el reporte de desvíos críticos por WhatsApp a los nodos.
   - Acceso a trazabilidad y auditoría (corte maestro y sincro).

---

## 📱 Distribución y Uso en Celular (Sin Instalación)

### 🥇 1. Archivo Único Autónomo: `Tablero_PBA.html` *(Recomendado - 0 Instalación)*
- **Archivo**: [Tablero_PBA.html](file:///c:/Users/gmontes/OneDrive%20-%20Correo%20Argentino/Escritorio/app%20celu%20pba/Tablero_PBA.html) (288 KB).
- **No requiere instalación, permisos de administrador ni APKs.**
- **Cómo enviarlo por WhatsApp**:
  1. Abrir WhatsApp (Web o celular).
  2. Tocar el clip **Adjuntar (📎)** y elegir **Documento**.
  3. Seleccionar [Tablero_PBA.html](file:///c:/Users/gmontes/OneDrive%20-%20Correo%20Argentino/Escritorio/app%20celu%20pba/Tablero_PBA.html) y enviar.
- **Cómo lo usa el destinatario en el celular**:
  1. Toca el archivo recibido en WhatsApp y se abre inmediatamente en **Chrome**, **Samsung Internet** o **Safari**.
  2. Funciona al 100% con todos los zócalos (**Región**, **Nodos**, **Ranking**, **Desvíos**), gráficos interactivos y botones de compartir.
  3. *(Opcional)* Para tenerlo con ícono propio en la pantalla del celular como una app nativa:
     - En **Android (Chrome)**: Tocá los 3 puntos `⋮` y seleccioná **"Agregar a la pantalla principal"**.
     - En **iPhone (Safari)**: Tocá el botón de compartir `Compartir` y elegí **"Agregar a pantalla de inicio"**.

---

### 🥈 2. Archivo APK Nativo (Para celulares que permitan APKs)
- **Archivo**: [Tablero_PBA_CorreoArgentino.apk](file:///c:/Users/gmontes/OneDrive%20-%20Correo%20Argentino/Escritorio/app%20celu%20pba/Tablero_PBA_CorreoArgentino.apk) (65 KB).
- Si el celular corporativo tiene bloqueada la instalación de APKs por política de seguridad, utilizar la opción 1 ([Tablero_PBA.html](file:///c:/Users/gmontes/OneDrive%20-%20Correo%20Argentino/Escritorio/app%20celu%20pba/Tablero_PBA.html)).
