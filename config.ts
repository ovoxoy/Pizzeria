
// --- KONFIGURATION ---

export const APP_CONFIG = {
  // Die WhatsApp Nummer des Restaurants (Format: 49 ohne +)
  whatsappNumber: "491736398022",
  
  // Liefergebiete und Kosten (Optional für spätere Logik)
  deliveryFee: 1.00, // Energiepauschale
};

export const PAYPAL_CONFIG = {
  // Schalter: Setze auf 'true', um PayPal im Checkout zu aktivieren.
  // Aktuell auf 'false' gesetzt ("ausgeklammert"), damit es vorbereitet aber unsichtbar ist.
  enabled: true, 

  // HIER DEINE PAYPAL DATEN EINTRAGEN:
  // Die "Client ID" findest du im PayPal Developer Dashboard unter "Apps & Credentials".
  // Nutze erst die "Sandbox" ID zum Testen, später die "Live" ID.
  clientId: "DEINE_PAYPAL_CLIENT_ID_HIER_EINFÜGEN",
  
  // Währung
  currency: "EUR",

  // Modus: 'sandbox' zum Testen oder 'production' für echte Zahlungen
  mode: 'sandbox' as 'sandbox' | 'production',
};
