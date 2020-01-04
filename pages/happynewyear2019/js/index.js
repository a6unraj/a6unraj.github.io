var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var scene = void 0,renderer = void 0,camera = void 0;

var CHAR_MAP_SIZE_W = 200;
var CHAR_MAP_SIZE_H = 40;

var getRandomNum = function getRandomNum() {var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var render = function render() {
    orbitControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
};

var onResize = function onResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};var

CharactersTexture = function () {
    function CharactersTexture() {var characters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello';_classCallCheck(this, CharactersTexture);
        this.characters = characters;
        this.charLen = characters.length;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.matrix = Math.ceil(Math.sqrt(this.charLen));
        this.cellSize = 256;
        this.texture;
        this.generateTexture();
    }_createClass(CharactersTexture, [{ key: 'generateTexture', value: function generateTexture()
        {
            // 一つのテクスチャに全ての文字を書く
            this.canvas.width = this.matrix * this.cellSize;
            this.canvas.height = this.canvas.width;
            this.ctx.font = '220px Arial';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.textBaseline = 'middle';
            this.ctx.textAlign = 'center';
            this.ctx.translate(this.cellSize / 2, this.cellSize / 2);
            var cnt = 0;
            for (var y = 0; y < this.matrix; y++) {
                for (var x = 0; x < this.matrix; x++) {
                    if (cnt > this.charLen - 1) break;
                    this.ctx.fillText(this.characters[cnt],
                    this.cellSize * (x % this.matrix),
                    this.cellSize * Math.floor(cnt / this.matrix));
                    cnt++;
                }
            }
            var url = this.canvas.toDataURL('image/png', 1.0);
            var image = new Image();
            image.src = url;
            this.texture = new THREE.Texture(image);
            this.texture.needsUpdate = true;
            this.texture.minFilter = THREE.LinearFilter;
            // ↓for check canvas
            // const bodyEL = document.getElementById('body');
            // bodyEL.appendChild(this.canvas);
            return this.texture;
        } }]);return CharactersTexture;}();var


CharactersParticles = function () {
    function CharactersParticles(charactersTexture, charactersPositionMap) {_classCallCheck(this, CharactersParticles);
        this.wrap = new THREE.Object3D();
        this.charactersTexture = charactersTexture;
        this.charactersPositionMap = charactersPositionMap;
        this.texture = charactersTexture.texture;
        this.num = charactersPositionMap.existPos.length;
        this.generateParticle();
    }_createClass(CharactersParticles, [{ key: 'generateParticle', value: function generateParticle()
        {
            var mapX = 0;
            var mapY = 0;
            var tempIndex = 0;
            var division = 1 / this.charactersTexture.matrix;
            for (var i = 0; i < this.num; i++) {
                var geometory = new THREE.PlaneGeometry(20, 20, 1, 1);
                // uv mapping
                tempIndex = i % this.charactersTexture.charLen;
                mapX = tempIndex % this.charactersTexture.matrix;
                mapY = this.charactersTexture.matrix - 1 - Math.floor(tempIndex / this.charactersTexture.matrix);
                // Specify the UV map for the vertices of each polygon.
                // Specifies which part of the texture image is to be assigned to the vertex of the polygon.
                for (var j = 0; j < geometory.faceVertexUvs[0].length; j++) {
                    var uv = geometory.faceVertexUvs[0][j];
                    for (var k = 0; k < uv.length; k++) {
                        var point = uv[k];
                        point.x = division * (point.x + mapX);
                        point.y = division * (point.y + mapY);
                    }
                }
                var material = new THREE.MeshLambertMaterial({
                    color: new THREE.Color('hsl(' + getRandomNum(360) + ', 100%, 60%)'),
                    map: this.texture,
                    transparent: true,
                    side: THREE.DoubleSide });

                var mesh = new THREE.Mesh(geometory, material);
                this.wrap.add(mesh);
            }
        } }, { key: 'animation', value: function animation()
        {
            var cnt = 0;
            for (var i = 0; i < this.charactersPositionMap.canvas.height; i++) {
                for (var j = 0; j < this.charactersPositionMap.canvas.width; j++) {

                    if (this.charactersPositionMap.existPosMap[i][j]) {
                        // position
                        var toPos = {
                            x: (j - this.charactersPositionMap.canvas.width / 2) * 20,
                            y: (this.charactersPositionMap.canvas.height / 2 - i) * 20,
                            z: 0 };

                        var radius = getRandomNum(10000, 3000);
                        var theta = THREE.Math.degToRad(getRandomNum(180));
                        var phi = THREE.Math.degToRad(getRandomNum(180));
                        var fromPos = {
                            x: Math.sin(theta) * Math.cos(phi) * radius,
                            y: Math.sin(theta) * Math.sin(phi) * radius,
                            z: radius

                            // rotation
                        };var toRotate = {
                            x: 0,
                            y: 0,
                            z: 0 };

                        var fromRotate = {
                            x: 0,
                            y: getRandomNum(360 * 3, 360),
                            z: 0

                            // particle setting
                        };var cahrParticle = this.wrap.children[cnt];
                        // potision set
                        TweenMax.set(cahrParticle.position, {
                            x: fromPos.x,
                            y: fromPos.y,
                            z: fromPos.z });

                        var randomPosDuration = getRandomNum(16, 2);
                        TweenMax.to(cahrParticle.position, randomPosDuration, {
                            x: toPos.x,
                            y: toPos.y,
                            z: toPos.z,
                            ease: Power4.easeInOut });

                        // rotation set
                        TweenMax.set(cahrParticle.rotation, {
                            x: fromRotate.x,
                            y: fromRotate.y,
                            z: fromRotate.z });

                        TweenMax.to(cahrParticle.rotation, randomPosDuration * 1.1, {
                            x: toRotate.x,
                            y: toRotate.y,
                            z: toRotate.z,
                            ease: Power2.easeOut });

                        cnt++;
                    }
                }
            }
        } }]);return CharactersParticles;}();var


CharactersPositionMap = function () {
    function CharactersPositionMap(characters, w, h) {_classCallCheck(this, CharactersPositionMap);
        this.canvas = document.createElement('canvas');
        this.canvas.width = w;
        this.canvas.height = h;
        this.characters = characters;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = '24px Arial';
        this.ctx.fillStyle = '#ff0000';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(characters, w / 2, h / 2);
        this.existPos = [];
        this.existPosMap = [];
        this.getExistPos();
        // ↓for check canvas
        // const bodyEL = document.getElementById('body');
        // bodyEL.appendChild(this.canvas);
    }_createClass(CharactersPositionMap, [{ key: 'getExistPos', value: function getExistPos()
        {
            var imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
            var index = 0;
            for (var i = 0; i < this.canvas.height; i++) {
                this.existPosMap[i] = [];
                for (var j = 0; j < this.canvas.width; j++) {
                    index = j * 4 + i * this.canvas.width * 4;
                    var redColor = imageData[index];
                    this.existPosMap[i][j] = redColor > 0;
                    if (redColor > 0) {
                        this.existPos.push(index);
                    }
                }
            }
        } }]);return CharactersPositionMap;}();var


DustParticles =
function DustParticles() {var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;_classCallCheck(this, DustParticles);
    this.num = num;
    this.wrap = new THREE.Object3D();
    for (var i = 0; i < this.num; i++) {
        var size = getRandomNum(100, 10);
        var geometory = new THREE.BoxGeometry(size, size, size);
        var material = new THREE.MeshLambertMaterial({
            opacity: 0.5,
            transparent: true,
            color: 0xffffff });

        var mesh = new THREE.Mesh(geometory, material);
        var radius = getRandomNum(7000, 2000);
        var theta = THREE.Math.degToRad(getRandomNum(180));
        var phi = THREE.Math.degToRad(getRandomNum(360));
        mesh.position.x = Math.sin(theta) * Math.cos(phi) * radius;
        mesh.position.y = Math.sin(theta) * Math.sin(phi) * radius;
        mesh.position.z = Math.cos(theta) * radius;
        mesh.rotation.x = getRandomNum(360);
        mesh.rotation.y = getRandomNum(360);
        mesh.rotation.z = getRandomNum(360);
        this.wrap.add(mesh);
    }
};


var dustParticles = new DustParticles(300);
var charactersTexture = new CharactersTexture('HappyNewYear');
var charactersPositionMap = new CharactersPositionMap('Happy New Year', CHAR_MAP_SIZE_W, CHAR_MAP_SIZE_H);
var charactersParticles = new CharactersParticles(charactersTexture, charactersPositionMap);

/* scene
                                                                                             --------------------------------------*/
scene = new THREE.Scene();

/* camera
                           --------------------------------------*/
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
// camera.position.x = -2020;
// camera.position.y = -30;
// camera.position.z = 170;
camera.position.x = 310;
camera.position.y = -90;
camera.position.z = 270;
camera.lookAt(scene.position);
scene.add(camera);

/* renderer
                   --------------------------------------*/
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(new THREE.Color(0xfdfff3));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

/* AmbientLight
                                   --------------------------------------*/
var ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

/* DirectionalLight
                         --------------------------------------*/
var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(0, 1000, 1000);
directionalLight.castShadow = true;
scene.add(directionalLight);

/* OrbitControls
                             --------------------------------------*/
var orbitControls = new THREE.OrbitControls(camera);
orbitControls.autoRotate = false;
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.37;

/* dust particle
                                    --------------------------------------*/
scene.add(dustParticles.wrap);

/* charactersParticles
                               --------------------------------------*/
scene.add(charactersParticles.wrap);
charactersParticles.animation();

/* resize
                                 --------------------------------------*/
window.addEventListener('resize', onResize);

/* rendering start
                                             --------------------------------------*/
document.getElementById('WebGL-output').appendChild(renderer.domElement);
render();