// utils/redis.mjs

import redis from 'redis';

// Redis bağlantı parametreleri
const redisOptions = {
    host: 'localhost', // Redis sunucu adresi
    port: 6379, // Redis portu
    // password: 'optional-password' // Redis şifresi (varsa)
};

// Redis istemcisini oluştur
const redisClient = redis.createClient(redisOptions);

// Redis bağlantı olaylarını dinle
redisClient.on('connect', () => {
    console.log('Redis ile bağlantı kuruldu');
});

redisClient.on('error', (err) => {
    console.error('Redis bağlantı hatası:', err);
});

// Redis işlemleri için fonksiyonlar
export const redisSet = (key, value) => {
    redisClient.set(key, value, (err, reply) => {
        if (err) {
            console.error('Redis set hatası:', err);
            return;
        }
        console.log(`Redis'e ${key} anahtarıyla ${value} değeri eklendi`);
    });
};

export const redisGet = (key, callback) => {
    redisClient.get(key, (err, data) => {
        if (err) {
            console.error('Redis get hatası:', err);
            callback(err, null);
            return;
        }
        console.log(`Redis'ten ${key} anahtarıyla ${data} değeri alındı`);
        callback(null, data);
    });
};

// Redis istemcisini dışarıya aktar
export default redisClient;

// Redis istemcisini başlat ve bağlantıyı dinle
redisClient.connect();

// Redis istemcisini dışarıya aktar ve bağlantıyı başlat
export const redisInit = () => {
    redisClient.on('connect', () => {
        console.log('Redis ile bağlantı kuruldu');
    });

    redisClient.on('error', (err) => {
        console.error('Redis bağlantı hatası:', err);
    });
};
