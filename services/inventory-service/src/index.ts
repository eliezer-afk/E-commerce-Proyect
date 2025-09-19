import * as colors from 'colors';
import createServer from './server';

async function bootstrap() {
    const PORT = process.env.PORT || 5000;

    // Crear y obtener la instancia del servidor
    const server = await createServer();

    // Iniciar el servidor
    await server.listen(PORT);

    console.log(colors.bgMagenta(`Server running on port ${PORT}`));
}

bootstrap().catch(error => {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
});