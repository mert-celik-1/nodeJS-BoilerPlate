# Temel imaj olarak Node.js kullan
FROM node:18

# Çalışma dizinini oluştur ve belirle
WORKDIR /usr/src/app

# Paket tanım dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamanın hangi portu dinleyeceğini belirt
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
