var createScene = function () {
    
    // light show helper function 
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // light show 
    async function light_show(light1,light2,light3, light4) {
        await sleep(5000)
        light1.setEnabled(true);
        await sleep(500)
        light1.setEnabled(false)
        await sleep(100)
        light1.setEnabled(true);
        await sleep(300)
        light1.setEnabled(false)
        await sleep(100)
        light1.setEnabled(true);
        await sleep(2430);
        light2.setEnabled(true);
        await sleep(2676);
        light3.setEnabled(true);
        await sleep(3123);
        light4.setEnabled(true);
        await sleep(45000)
        alert("Time to move on."); 
    }

    var scene = new BABYLON.Scene(engine);

    // creates and positions camera 
    var camera = new BABYLON.UniversalCamera("camera1", new BABYLON.Vector3(-1, .8, .8), scene);
    camera.rotation.y += Math.PI / 2
    camera.fov = .9
    camera.attachControl(canvas, true);

    // Create dim enviroment light & 3 spotlights
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.03;

    var light1 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(.5, 1, 0.8), 
    new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
    light1.diffuse = new BABYLON.Color3(0.85, 1, 0);

    var light2 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(.4, 1, 1.7), 
    new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
    light2.diffuse = new BABYLON.Color3(0.85, 1, 0);

    var light3 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(.3, 1, -.25), 
    new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
    light3.diffuse = new BABYLON.Color3(0.85, 1, 0);

    // hide the lights for the spotlight show
    light1.setEnabled(false);
    light2.setEnabled(false);
    light3.setEnabled(false);
    light.setEnabled(false)

    BABYLON.SceneLoader.ImportMesh("", "path", "file", scene);

    // github button
    var invis_button = BABYLON.Mesh.CreatePlane("plane", 1);
    let git_text = scene.getMeshByName("Text.002")
    invis_button.position = new BABYLON.Vector3(.5, .435, 1.7795)
    invis_button.rotation = new BABYLON.Vector3(.2, 45, .02)

    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(invis_button);

    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "");
    button1.width = 0.42;
    button1.height = 0.225;
    button1.fontSize = 50;
    button1.background = "";
    button1.alpha = 0;
    button1.color = 0;
    button1.background = 0;
    button1.thickness = 0;
    button1.onPointerUpObservable.add(function () {
        window.open('https://github.com/carltonduke', '_blank');
    });
    advancedTexture.addControl(button1);

    // light show
    light_show(light1,light2,light3, light)

    return scene;
};
