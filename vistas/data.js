// vistas/data.js

// 1. Base de datos única de facturas
const FACTURAS_DB = [
    {
        id: "FAP-45210",
        clienteId: "CLI-900123456",
        clienteNombre: "ACME Industrial S.A.S.",
        fechaCreacion: "2026-03-01",
        fechaVencimiento: "2026-04-12",
        base: 1000.00,
        impuesto: 190.00,
        mora: 50.00,
        descuento: 0.00,
        abonado: 400.00, // Abono previo registrado en SAP
        estado: "vencida", // "pendiente", "vencida", "pagada"
        tipo: "Pago Factura",
        refEpayco: "EP-994812",
        fechaPago: "2026-05-12"
    },
    {
        id: "FAP-45399",
        clienteId: "CLI-900123456",
        clienteNombre: "ACME Industrial S.A.S.",
        fechaCreacion: "2026-04-15",
        fechaVencimiento: "2026-05-30",
        base: 500.00,
        impuesto: 95.00,
        mora: 0.00,
        descuento: 25.00,
        abonado: 0.00,
        estado: "pendiente",
        tipo: "Pago Factura",
        refEpayco: null,
        fechaPago: null
    },
    {
        id: "FAP-45400",
        clienteId: "CLI-800987654",
        clienteNombre: "Distribuidora del Norte Ltda.",
        fechaCreacion: "2026-05-01",
        fechaVencimiento: "2026-06-15",
        base: 4320.00,
        impuesto: 820.80,
        mora: 0.00,
        descuento: 0.00,
        abonado: 1500.00, // Abono previo
        estado: "pendiente",
        tipo: "Pago Factura",
        refEpayco: null,
        fechaPago: null
    },
    {
        id: "FAP-45401",
        clienteId: "CLI-800987654",
        clienteNombre: "Distribuidora del Norte Ltda.",
        fechaCreacion: "2026-05-10",
        fechaVencimiento: "2026-06-20",
        base: 850.00,
        impuesto: 161.50,
        mora: 25.00,
        descuento: 0.00,
        abonado: 0.00,
        estado: "vencida",
        tipo: "Pago Factura",
        refEpayco: null,
        fechaPago: null
    },
    {
        id: "FAP-45402",
        clienteId: "CLI-700112233",
        clienteNombre: "Tecnología Avanzada Global S.A.",
        fechaCreacion: "2026-06-01",
        fechaVencimiento: "2026-07-15",
        base: 6200.00,
        impuesto: 1178.00,
        mora: 0.00,
        descuento: 250.00,
        abonado: 2000.00, // Abono previo
        estado: "pendiente",
        tipo: "Pago Factura",
        refEpayco: null,
        fechaPago: null
    },
    {
        id: "FAP-45100",
        clienteId: "CLI-800987654",
        clienteNombre: "Distribuidora del Norte Ltda.",
        fechaCreacion: "2026-02-01",
        fechaVencimiento: "2026-03-01",
        base: 1150.00,
        impuesto: 218.50,
        mora: 50.00,
        descuento: 0.00,
        abonado: 1418.50,
        estado: "pagada",
        tipo: "Pago Factura",
        refEpayco: "EP-993755",
        fechaPago: "2026-03-05"
    },
    {
        id: "FAP-45512",
        clienteId: "CLI-900123456",
        clienteNombre: "ACME Industrial S.A.S.",
        fechaCreacion: "2026-06-10",
        fechaVencimiento: "2026-07-10",
        base: 2800.00,
        impuesto: 532.00,
        mora: 0.00,
        descuento: 100.00,
        abonado: 3232.00,
        estado: "pagada",
        tipo: "Pago Factura",
        refEpayco: "EP-995100",
        fechaPago: "2026-07-02"
    },
    {
        id: "FAP-46906",
        clienteId: "CLI-600556677",
        clienteNombre: "iSupport",
        fechaCreacion: "2026-02-01",
        fechaVencimiento: "2026-03-01",
        base: 1150.00,
        impuesto: 218.50,
        mora: 500.06,
        descuento: 0.00,
        abonado: 150.00,
        estado: "vencida",
        tipo: "Pago Factura",
        refEpayco: "EP-993755",
        fechaPago: "2026-03-05"
    },
    {
        id: "FAP-46907",
        clienteId: "CLI-600556677",
        clienteNombre: "iSupport",
        fechaCreacion: "2026-02-01",
        fechaVencimiento: "2026-03-01",
        base: 1150.00,
        impuesto: 218.50,
        mora: 0.00, // CORREGIDO: Se reemplaza 'null' por 0.00 para evitar errores NaN
        descuento: 0.00,
        abonado: 150.00,
        estado: "pagada",
        tipo: "Pago Factura",
        refEpayco: "EP-993755",
        fechaPago: "2026-03-05"
    }
];

// 2. Base de datos de Clientes / Socios de Negocio
const CLIENTES_DB = [
    { id: "CLI-900123456", nombre: "ACME Industrial S.A.S." },
    { id: "CLI-800987654", nombre: "Distribuidora del Norte Ltda." },
    { id: "CLI-700112233", nombre: "Tecnología Avanzada Global S.A." },
    { id: "CLI-600556677", nombre: "iSupport" }
];

// 3. Registro de Incidentes Auditados para Soporte
const INCIDENTES_DB = [
    { 
        id: "FAP-45210", 
        clienteId: "CLI-900123456", 
        clienteNombre: "ACME Industrial S.A.S.", 
        fecha: "2026-07-20 10:14", 
        estado: "Rechazado Pasarela", 
        causa: "Fondos Insuficientes en Tarjeta" 
    },
    { 
        id: "FAP-45399", 
        clienteId: "CLI-900123456", 
        clienteNombre: "ACME Industrial S.A.S.", 
        fecha: "2026-07-21 08:30", 
        estado: "Pendiente Checkout", 
        causa: "Cliente abandonó el formulario ePayco" 
    },
    { 
        id: "FAP-45100", 
        clienteId: "CLI-800987654", 
        clienteNombre: "Distribuidora del Norte Ltda.", 
        fecha: "2026-03-05 14:20", 
        estado: "Aprobado", 
        causa: "Sincronizado correctamente con SAP" 
    },
    { 
        id: "FAP-46906", 
        clienteId: "CLI-600556677", 
        clienteNombre: "iSupport", 
        fecha: "2026-03-05 11:15", 
        estado: "Vencida", 
        causa: "Saldo pendiente en mora registrado en SAP" 
    },
    { 
        id: "FAP-46907", 
        clienteId: "CLI-600556677", 
        clienteNombre: "iSupport", 
        fecha: "2026-03-05 11:20", 
        estado: "Aprobado", 
        causa: "Sincronizado correctamente con SAP" 
    }
];

// 4. Funciones globales de cálculo utilitarias
function obtenerEstadisticas() {
    let totalPendiente = 0;
    let carteraVencida = 0;
    
    let cantPorPagar = 0, sumaPorPagar = 0;
    let cantPendientes = 0, sumaPendientes = 0;
    let cantVencidas = 0, sumaVencidas = 0;
    let cantPagadas = 0, sumaPagadas = 0;
    
    let ahorroProntoPago = 0;
    let totalMoraPagada = 0;

    FACTURAS_DB.forEach(f => {
        const subtotal = f.base || 0;
        const impuesto = f.impuesto || 0;
        const mora = f.mora || 0;
        const descuento = f.descuento || 0;
        const abonado = f.abonado || 0;

        const totalNetoPendiente = (subtotal + impuesto + mora - descuento) - abonado;

        if (f.estado === "pendiente") {
            totalPendiente += totalNetoPendiente;
            cantPendientes++;
            sumaPendientes += totalNetoPendiente;
            
            cantPorPagar++;
            sumaPorPagar += totalNetoPendiente;
        } else if (f.estado === "vencida") {
            carteraVencida += totalNetoPendiente;
            cantVencidas++;
            sumaVencidas += totalNetoPendiente;
            
            cantPorPagar++;
            sumaPorPagar += totalNetoPendiente;
        } else if (f.estado === "pagada") {
            cantPagadas++;
            sumaPagadas += (subtotal + impuesto + mora - descuento);
            ahorroProntoPago += f.descuento;
            totalMoraPagada += f.mora;
        }
    });

    return {
        totalPendiente,
        carteraVencida,
        porPagar: { cant: cantPorPagar, suma: sumaPorPagar },
        pendientes: { cant: cantPendientes, suma: sumaPendientes },
        vencidas: { cant: cantVencidas, suma: sumaVencidas },
        pagadas: { cant: cantPagadas, suma: sumaPagadas },
        ahorroProntoPago,
        totalMoraPagada
    };
}

// Formateador de moneda colombiana
function formatearCOP(valor) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2
    }).format(valor || 0);
}

// 5. DATOS EXCLUSIVOS PARA EL PORTAL INTERNO DE LA EMPRESA (PDPSAC)
const LOGS_SISTEMA_DB = [
    { fecha: "2026-07-17 14:22:10", tipo: "INFO", componente: "SAP Service Layer", mensaje: "Sincronización exitosa de lote de facturas.", usuario: "Sistema Automatizado" },
    { fecha: "2026-07-17 11:05:43", tipo: "ERROR", componente: "ePayco Webhook", mensaje: "Fallo de firma en intento de pago. Código HTTP 401 Unauthorized.", usuario: "Gateway ePayco" },
    { fecha: "2026-07-16 09:15:22", tipo: "WARNING", componente: "n8n Automation", mensaje: "Reintento de webhook de anticipo enviado con retraso (2min).", usuario: "n8n_Core" },
    { fecha: "2026-07-15 16:45:01", tipo: "CRITICAL", componente: "HANA-06 DB", mensaje: "Tiempo de espera agotado (Timeout) en consulta de cupo disponible.", usuario: "DB_Admin" }
];