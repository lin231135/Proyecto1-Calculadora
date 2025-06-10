# Calculadora Web - 231135

## Enlace al proyecto desplegado

Accede a la calculadora desde este [enlace](https://calicheoficial.lat/231135/Calculadora/).

![image](https://github.com/user-attachments/assets/25457288-ec7c-41f0-bb19-e0139eba53ab)


## Características

- Operaciones básicas: suma, resta, multiplicación, división, módulo.
- Conversión a número negativo (+/-).
- Validación específica:
  - Máximo de 9 caracteres en pantalla.
  - No permite resultados negativos ni mayores a `999999999` (muestra `ERROR`).
  - Manejo adecuado del punto decimal.
- Interfaz intuitiva con pantalla y teclado numérico.

## Tecnologías

- **React** con **TypeScript** para desarrollo del frontend.
- **Vite** para la compilación rápida.
- **Bun** como administrador de paquetes.
- **Vitest** para pruebas unitarias.
- **ESLint** con reglas personalizadas.

## Estructura del Proyecto

```
Proyecto1-Calculadora/
├── src/
│   ├── components/
│   │   ├── Display.tsx
│   │   ├── Keyboard.tsx
│   │   └── Calculadora.tsx
│   ├── hooks/
│   │   └── useCalculator.ts
│   ├── tests/
│   │   └── Calculator.test.tsx
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── bun.lock
├── vite.config.ts
└── eslint.config.js
```

## Comandos

- Ejecutar localmente:

```bash
bun dev
```

- Realizar build para producción:

```bash
bun run build
```

- Ejecutar pruebas:

```bash
bun test
```

- Ejecutar linter:

```bash
bun run lint
```
