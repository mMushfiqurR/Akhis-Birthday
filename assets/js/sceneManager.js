export class SceneManager {

    constructor() {

        this.currentScene = "landing";

    }

    goTo(sceneId) {

        const scene = document.getElementById(sceneId);

        if (!scene) {
            console.warn(`Scene "${sceneId}" not found.`);
            return;
        }

        scene.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        this.currentScene = sceneId;

    }

    getCurrentScene() {

        return this.currentScene;

    }

}