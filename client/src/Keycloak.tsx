import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "taskmanager",
  clientId: "springboot-app",
});

export default keycloak;
