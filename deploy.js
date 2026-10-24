// Sube la carpeta dist/ al hosting por FTP. Uso: npm run build && npm run deploy
// Las credenciales se leen del archivo .env (ver .env.example).
import FtpDeploy from 'ftp-deploy';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT || 21,
    localRoot: path.join(__dirname, 'dist'),
    remoteRoot: process.env.FTP_REMOTE_ROOT || '/',
    include: ['*', '**/*', '.htaccess', '**/.htaccess'],
    exclude: [
        '.env',
        '.env.example',
        'node_modules/**',
        '.git/**',
        'package.json',
        'package-lock.json',
        'deploy.js'
    ],
    deleteRemote: false,
    forcePasv: true,
    sftp: false
};

console.log('🚀 Iniciando despliegue de la PAGINA PÚBLICA...');
console.log(`📂 Origen local: ${config.localRoot}`);
console.log(`🌐 Servidor: ${config.host}`);
console.log(`📁 Destino remoto: ${config.remoteRoot}`);

ftpDeploy
    .deploy(config)
    .then(() => console.log('✅ Despliegue de la PAGINA completado con éxito!'))
    .catch((err) => {
        console.error('❌ Error en el despliegue:', err.message);
        process.exit(1);
    });

ftpDeploy.on('uploading', (data) => {
    console.log(`📤 Subiendo (${data.transferredFileCount}/${data.totalFilesCount}): ${data.filename}`);
});
