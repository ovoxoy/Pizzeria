import { Category } from './types';

export const MENU_DATA: Category[] = [
  {
    id: 'antipasti',
    label: 'Antipasti',
    items: [
      { id: 'ap1', name: 'Bruschetta classica', description: 'Tomaten, Basilikum, Knoblauch', price: 8.50, category: 'antipasti' },
      { id: 'ap2', name: 'Bruschetta Parma', description: 'Tomaten, Parma Schinken, Parmesan', price: 10.00, category: 'antipasti' },
      { id: 'ap3', name: 'Antipasto misto italiano', description: 'Parmaschinken, Salami, Schinken, Oliven, Pilze, Caprese', price: 12.50, category: 'antipasti' },
    ]
  },
  {
    id: 'salat',
    label: 'Salate',
    items: [
      { id: 'sal1', name: 'Gurkensalat', description: 'Frische Gurken', price: 5.00, category: 'salat' },
      { id: 'sal2', name: 'Insalata verde (Klein)', description: 'Grüner Salat', price: 4.50, category: 'salat' },
      { id: 'sal3', name: 'Insalata verde (Groß)', description: 'Grüner Salat', price: 6.00, category: 'salat' },
      { id: 'sal4', name: 'Insalata di pomodoro (Klein)', description: 'Tomatensalat', price: 5.00, category: 'salat' },
      { id: 'sal5', name: 'Insalata di pomodoro (Groß)', description: 'Tomatensalat', price: 6.50, category: 'salat' },
      { id: 'sal6', name: 'Insalata mista (Klein)', description: 'Gemischter Salat', price: 6.50, category: 'salat' },
      { id: 'sal7', name: 'Insalata mista (Groß)', description: 'Gemischter Salat', price: 8.50, category: 'salat' },
      { id: 'sal8', name: 'Caprese', description: 'Frische Tomaten, Mozzarella, Basilikum', price: 9.00, category: 'salat' },
      { id: 'sal9', name: 'Haussalat', description: 'Gemischter Salat mit Schinken, Käse', price: 8.50, category: 'salat' },
      { id: 'sal10', name: 'Insalata capriccio', description: 'Ei, Thunfisch, Käse, Oliven, Tomaten, Gurken', price: 11.50, category: 'salat' },
      { id: 'sal11', name: 'Insalata bella Italia', description: 'Mozzarella, Schinken, Ei, Thunfisch', price: 11.50, category: 'salat' },
      { id: 'sal12', name: 'Insalata tonno', description: 'Gemischter Salat, Thunfisch, Zwiebeln', price: 10.00, category: 'salat' },
      { id: 'sal13', name: 'Insalata campagnola', description: 'Gemischter Salat, Mais, Bohnen, Zwiebeln, Ei', price: 10.00, category: 'salat' },
      { id: 'sal14', name: 'Insalata di pollo', description: 'Gemischter Salat mit Hähnchen', price: 12.50, category: 'salat' },
    ]
  },
  {
    id: 'pizza',
    label: 'Pizza',
    items: [
      { id: 'p1', name: 'Pizza Brot weiß', description: 'Mit oder ohne Knoblauch', price: 4.50, category: 'pizza' },
      { id: 'p2', name: 'Pizza Brot rot', description: 'Tomatensauce, Knoblauch (Party: 11,00 €)', price: 6.00, category: 'pizza' },
      { id: 'p3', name: 'Marinara', description: 'Tomatensauce, Oregano, Knoblauch (Party: 13,00 €)', price: 7.00, category: 'pizza' },
      { id: 'p4', name: 'Margherita', description: 'Tomatensauce, Mozzarella, Oregano (Party: 16,00 €)', price: 8.00, category: 'pizza' },
      { id: 'p5', name: 'Funghi', description: 'Champignons (Party: 17,00 €)', price: 9.00, category: 'pizza' },
      { id: 'p6', name: 'Salame', description: 'Salami (Party: 17,00 €)', price: 9.00, category: 'pizza' },
      { id: 'p7', name: 'Prosciutto', description: 'Schinken (Party: 17,00 €)', price: 9.00, category: 'pizza' },
      { id: 'p8', name: 'Romana', description: 'Sardellen (Party: 17,00 €)', price: 9.00, category: 'pizza' },
      { id: 'p9', name: 'Hawaii', description: 'Schinken, Ananas (Party: 18,00 €)', price: 9.50, category: 'pizza' },
      { id: 'p10', name: 'Tonno', description: 'Thunfisch (Party: 18,50 €)', price: 10.00, category: 'pizza' },
      { id: 'p11', name: 'Sole', description: 'Schinken, Thunfisch (Party: 18,50 €)', price: 10.00, category: 'pizza' },
      { id: 'p12', name: 'Pugliese', description: 'Zwiebeln, Oliven (Party: 17,00 €)', price: 9.50, category: 'pizza' },
      { id: 'p13', name: 'Siciliana', description: 'Schinken, Champignons, Paprika (Party: 19,00 €)', price: 10.50, category: 'pizza' },
      { id: 'p14', name: 'Frutti di mare', description: 'Meeresfrüchte (Party: 21,00 €)', price: 11.00, category: 'pizza' },
      { id: 'p15', name: 'Calzone', description: 'Schinken, Champignons (Party: 19,00 €)', price: 10.00, category: 'pizza' },
      { id: 'p16', name: 'Capricciosa', description: 'Schinken, Artischocken, Champignons (Party: 21,00 €)', price: 11.00, category: 'pizza' },
      { id: 'p17', name: 'Caprese Pizza', description: 'Frische Tomaten, Basilikum (Party: 20,50 €)', price: 10.50, category: 'pizza' },
    ]
  },
  {
    id: 'speciali',
    label: 'Speciali',
    items: [
      { id: 's1', name: 'Primavera', description: 'Schinken, Sahne, Mais (Party: 21,50 €)', price: 10.50, category: 'speciali' },
      { id: 's2', name: 'Vesuvio', description: 'Schinken, Pilze (Party: 21,50 €)', price: 10.50, category: 'speciali' },
      { id: 's3', name: 'Biancaneve', description: 'Mozzarella, Sahne (Party: 20,00 €)', price: 10.00, category: 'speciali' },
      { id: 's4', name: 'Campagnola', description: 'Parmesan, Schinken, Rucola (Party: 22,00 €)', price: 11.00, category: 'speciali' },
      { id: 's5', name: 'Cattiva', description: 'Scharfe Salami, Zwiebeln, scharfes Öl (Party: 21,00 €)', price: 10.50, category: 'speciali' },
      { id: 's6', name: 'Caprese speciale', description: 'Frische Tomaten, Parmesan, Rucola (Party: 22,00 €)', price: 11.00, category: 'speciali' },
      { id: 's7', name: 'Italiano', description: 'Salami, Schinken, Parmesan (Party: 23,00 €)', price: 11.50, category: 'speciali' },
      { id: 's8', name: 'Massimo', description: 'Oliven, Parmesan, Parma Schinken (Party: 24,00 €)', price: 11.50, category: 'speciali' },
      { id: 's9', name: 'Jambieri', description: 'Garnelen, Zucchini (Party: 22,50 €)', price: 11.00, category: 'speciali' },
      { id: 's10', name: 'Dello chef', description: 'Schinken, Artischocken, Parmesan (Party: 22,00 €)', price: 11.00, category: 'speciali' },
      { id: 's11', name: 'Della casa', description: 'Zwiebeln, Oliven, Champignons, Artischocken (Party: 22,00 €)', price: 11.00, category: 'speciali' },
      { id: 's12', name: 'Boscaiola', description: 'Speck, Champignons (Party: 22,00 €)', price: 11.00, category: 'speciali' },
      { id: 's13', name: 'Diavola', description: 'Scharfe Salami, Peperoni (Party: 23,00 €)', price: 11.50, category: 'speciali' },
      { id: 's14', name: 'Mezza luna', description: 'Halb Calzone, halb Pizza (Party: 24,00 €)', price: 12.00, category: 'speciali' },
      { id: 's15', name: 'Corsaro', description: 'Zwiebeln, Thunfisch, Kapern, Sardellen (Party: 23,00 €)', price: 11.50, category: 'speciali' },
      { id: 's16', name: 'Fantasia', description: 'Bresaola, Parmesan, Rucola (Party: 24,00 €)', price: 12.00, category: 'speciali' },
      { id: 's17', name: 'Patatosa', description: 'Kartoffeln, Speck (Party: 23,00 €)', price: 11.50, category: 'speciali' },
      { id: 's18', name: 'Italia', description: 'Schinken, Sahne, Parmesan, Rucola (Party: 23,00 €)', price: 11.50, category: 'speciali' },
      { id: 's19', name: 'Del Capitano', description: 'Schinken, Pilze, Parmesan (Party: 23,00 €)', price: 11.50, category: 'speciali' },
      { id: 's20', name: 'Epistoliva', description: 'Basilikum, Tomaten (Party: 21,00 €)', price: 10.50, category: 'speciali' },
    ]
  },
  {
    id: 'pasta',
    label: 'Pasta',
    items: [
      { id: 'pas1', name: 'Spaghetti aglio e olio', description: 'Knoblauch, scharfes Öl', price: 8.00, category: 'pasta' },
      { id: 'pas2', name: 'Penne Napoli', description: 'Tomatensauce', price: 8.50, category: 'pasta' },
      { id: 'pas3', name: 'Penne arrabbiata', description: 'Tomatensauce, scharf', price: 8.50, category: 'pasta' },
      { id: 'pas4', name: 'Rigatoni bolognese', description: 'Hackfleischsauce', price: 10.50, category: 'pasta' },
      { id: 'pas5', name: 'Rigatoni quattro formaggi', description: 'Vier Käsesorten', price: 11.50, category: 'pasta' },
      { id: 'pas6', name: 'Rigatoni al forno', description: 'Überbacken', price: 10.50, category: 'pasta' },
      { id: 'pas7', name: 'Tagliatelle speck e panna', description: 'Speck, Sahne', price: 11.00, category: 'pasta' },
      { id: 'pas8', name: 'Tagliatelle campagnola', description: 'Speck, Pilze, Sahne', price: 11.50, category: 'pasta' },
      { id: 'pas9', name: 'Spaghetti frutti di mare', description: 'Meeresfrüchte', price: 11.50, category: 'pasta' },
      { id: 'pas10', name: 'Spaghetti carbonara', description: 'Speck, Ei, Sahne', price: 11.00, category: 'pasta' },
      { id: 'pas11', name: 'Tagliatelle boscaiola', description: 'Speck, Champignons, Sahne', price: 11.50, category: 'pasta' },
      { id: 'pas12', name: 'Spaghetti gamberetti', description: 'Garnelen, Tomaten, Sahne', price: 12.00, category: 'pasta' },
      { id: 'pas13', name: 'Tagliatelle lachs', description: 'Lachs, Tomatensahnesauce', price: 13.00, category: 'pasta' },
      { id: 'pas14', name: 'Gnocchi quattro formaggi', description: 'Vier Käsesorten', price: 11.00, category: 'pasta' },
    ]
  },
  {
    id: 'panini',
    label: 'Panini',
    items: [
      { id: 'pan1', name: 'Hotdog', description: '', price: 4.50, category: 'panini' },
      { id: 'pan2', name: 'Caprese', description: 'Tomate, Mozzarella', price: 7.00, category: 'panini' },
      { id: 'pan3', name: 'Massimo', description: 'Prosciutto, Mozzarella', price: 7.00, category: 'panini' },
      { id: 'pan4', name: 'Stifozio', description: 'Schinken, Mozzarella', price: 6.50, category: 'panini' },
      { id: 'pan5', name: 'Rustico', description: 'Schinken, Salami, Pilze, Mozzarella', price: 8.50, category: 'panini' },
      { id: 'pan6', name: 'Burger', description: 'Rinderhack, Käse, Tomate, Salat', price: 10.50, category: 'panini' },
    ]
  },
  {
    id: 'dessert',
    label: 'Dessert',
    items: [
      { id: 'd1', name: 'Panna cotta', description: '', price: 4.00, category: 'dessert' },
      { id: 'd2', name: 'Tiramisu', description: '', price: 4.50, category: 'dessert' },
      { id: 'd3', name: 'Tortino cioccolato nero', description: '', price: 5.00, category: 'dessert' },
      { id: 'd4', name: 'Tortino cioccolato bianco', description: '', price: 5.00, category: 'dessert' },
    ]
  }
];