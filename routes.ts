/**
 * Un tableau des routes qui sont accesible publiquement
 * Ces routes ne requiere pas d'authentification
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * Un tableau des routes qui sont utilisées pour l'authentification
 * Ces routes vont rediriger l'utilisateur connecté vers /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * Le prefix pour les routes de l'API d'authentification
 * Les routes qui commence par ce prefix sont utilisé pour l'API d'authentification
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Redirection par defaut apres la connexion
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
