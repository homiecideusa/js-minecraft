import PlayerEntity from "../../entity/PlayerEntity.js";

export default class PlayerController {

    constructor(minecraft) {
        this.minecraft = minecraft;
    }

    createPlayer(world) {
        return new PlayerEntity(this.minecraft, world);
    }

    sendChatMessage(message) {
        this.minecraft.addMessageToChat("<" + this.minecraft.player.username + "> " + message);
    }
}