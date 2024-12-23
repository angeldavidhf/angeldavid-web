# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Commit emojis
:tada: 							Begin a project.<br/>
:art: 							 Improve structure / format of the code.<br/>
:zap: 							 Improve performance.<br/>
:fire: 							Remove code or files.<br/>
:bug:							  Fix a bug.<br/>
:ambulance:						Critical hotfix.<br/>
:sparkles: 						Introduce new features.<br/>
:memo: 							Add or update documentation.<br/>
:lipstick:      				Add or update the UI and style files.<br/>
:lock: 							Fix security issues.<br/>
:construction:					Work in progress.<br/>
:arrow_down:					Downgrade dependencies.<br/>
:arrow_up:						Upgrade dependencies.<br/>
:heavy_plus_sign:				Add a dependency.<br/>
:heavy_minus_sign:				Remove a dependency.<br/>
:recycle:						Refactor code.<br/>
:hammer:						Add or update development scripts.<br/>
:wrench:						Add or update configuration files.<br/>
:poop:							Write bad code that needs to be improved.<br/>
:twisted_rightwards_arrows:		Merge branches.<br/>
:truck:							Move or rename resources (e.g.: files, paths, routes).<br/>
:package:						Add or update compiled files or packages.<br/>
:boom:							Introduce breaking changes.<br/>
:bento:							Add or update assets.<br/>
:building_construction:			Make architectural changes.<br/>
:see_no_evil:					Add or update a .gitignore file.<br/>
:alembic:						Perform experiments.<br/>
:adhesive_bandage:				Simple fix for a non-critical issue.<br/>
:wastebasket:					Deprecate code that needs to be cleaned up.<br/>
:coffin: 						Remove dead code.<br/>
:bricks:						Infrastructure related changes.<br/>
:alien:							Update code due to external API changes.<br/>
:globe_with_meridians:			Internationalization and localization.<br/>


