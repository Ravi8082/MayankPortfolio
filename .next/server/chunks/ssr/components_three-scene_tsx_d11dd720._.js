module.exports = {

"[project]/components/three-scene.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThreeScene)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/three@0.170.0/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ThreeScene() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const container = containerRef.current;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](60, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 9;
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
            antialias: true,
            alpha: true
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        // Lights
        const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.2);
        scene.add(ambientLight);
        const light1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"](0x22d3ee, 1.5, 50);
        light1.position.set(10, 10, 10);
        scene.add(light1);
        const light2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"](0x2dd4bf, 0.8, 50);
        light2.position.set(-10, -10, -10);
        scene.add(light2);
        const light3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"](0x06b6d4, 0.5, 30);
        light3.position.set(0, 15, 0);
        scene.add(light3);
        // Main cyber sphere (wireframe icosahedron)
        const icoGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](2.5, 2);
        const icoMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x22d3ee,
            emissive: 0x22d3ee,
            emissiveIntensity: 0.25,
            wireframe: true,
            transparent: true,
            opacity: 0.45
        });
        const cyberSphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](icoGeo, icoMat);
        scene.add(cyberSphere);
        // Inner core (dodecahedron - more complex)
        const coreGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DodecahedronGeometry"](1.0, 0);
        const coreMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x06b6d4,
            emissive: 0x06b6d4,
            emissiveIntensity: 1.0,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });
        const innerCore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](coreGeo, coreMat);
        scene.add(innerCore);
        // Glowing center orb
        const orbGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.35, 32, 32);
        const orbMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x22d3ee,
            transparent: true,
            opacity: 0.8
        });
        const orb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](orbGeo, orbMat);
        scene.add(orb);
        // Three orbital rings at different angles
        const ringConfigs = [
            {
                radius: 3.2,
                tube: 0.012,
                color: 0x22d3ee,
                rotX: 0,
                rotZ: 0,
                opacity: 0.4
            },
            {
                radius: 3.6,
                tube: 0.009,
                color: 0x2dd4bf,
                rotX: Math.PI / 3,
                rotZ: Math.PI / 6,
                opacity: 0.3
            },
            {
                radius: 4.0,
                tube: 0.007,
                color: 0x06b6d4,
                rotX: -Math.PI / 4,
                rotZ: Math.PI / 3,
                opacity: 0.2
            }
        ];
        const rings = [];
        for (const cfg of ringConfigs){
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusGeometry"](cfg.radius, cfg.tube, 16, 120);
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: cfg.color,
                emissive: cfg.color,
                emissiveIntensity: 1,
                transparent: true,
                opacity: cfg.opacity
            });
            const ring = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geo, mat);
            ring.rotation.x = cfg.rotX;
            ring.rotation.z = cfg.rotZ;
            scene.add(ring);
            rings.push(ring);
        }
        // DNA helix
        const helixGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        const helixPoints1 = [];
        const helixPoints2 = [];
        const helixParticles = [];
        for(let i = 0; i < 60; i++){
            const t = i / 60 * Math.PI * 4;
            const y = i / 60 * 12 - 6;
            const x1 = Math.cos(t) * 1.0;
            const z1 = Math.sin(t) * 1.0;
            const x2 = Math.cos(t + Math.PI) * 1.0;
            const z2 = Math.sin(t + Math.PI) * 1.0;
            helixPoints1.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](x1, y, z1));
            helixPoints2.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](x2, y, z2));
            if (i % 4 === 0) {
                const dotGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.04, 8, 8);
                const dotMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: 0x22d3ee,
                    transparent: true,
                    opacity: 0.7
                });
                const dot1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](dotGeo, dotMat);
                dot1.position.set(x1, y, z1);
                helixGroup.add(dot1);
                helixParticles.push(dot1);
                const dot2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](dotGeo.clone(), dotMat.clone());
                dot2.position.set(x2, y, z2);
                helixGroup.add(dot2);
                helixParticles.push(dot2);
            }
        }
        const curve1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](helixPoints1);
        const curve2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](helixPoints2);
        const tubeGeo1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TubeGeometry"](curve1, 100, 0.02, 8, false);
        const tubeGeo2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TubeGeometry"](curve2, 100, 0.02, 8, false);
        const tubeMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x22d3ee,
            emissive: 0x22d3ee,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.3
        });
        helixGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](tubeGeo1, tubeMat));
        helixGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](tubeGeo2, tubeMat.clone()));
        helixGroup.position.set(5, 0, -3);
        helixGroup.rotation.z = 0.3;
        scene.add(helixGroup);
        // Enhanced Particle field with multiple colors
        const pCount = 1200;
        const pPositions = new Float32Array(pCount * 3);
        const pColors = new Float32Array(pCount * 3);
        for(let i = 0; i < pCount; i++){
            pPositions[i * 3] = (Math.random() - 0.5) * 30;
            pPositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
            pPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
            // Color variations
            const colorChoice = Math.random();
            if (colorChoice < 0.33) {
                pColors[i * 3] = 0.133; // #22d3ee (cyan)
                pColors[i * 3 + 1] = 0.827;
                pColors[i * 3 + 2] = 0.933;
            } else if (colorChoice < 0.66) {
                pColors[i * 3] = 0.176; // #2dd4bf (teal)
                pColors[i * 3 + 1] = 0.831;
                pColors[i * 3 + 2] = 0.749;
            } else {
                pColors[i * 3] = 0.024; // #06b6d4 (sky)
                pColors[i * 3 + 1] = 0.714;
                pColors[i * 3 + 2] = 0.831;
            }
        }
        const pGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        pGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](pPositions, 3));
        pGeo.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](pColors, 3));
        const pMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
            size: 0.045,
            transparent: true,
            opacity: 0.7,
            sizeAttenuation: true,
            vertexColors: true,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        });
        const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Points"](pGeo, pMat);
        scene.add(particles);
        // Enhanced Stars with twinkle effect
        const sCount = 2500;
        const sPositions = new Float32Array(sCount * 3);
        const sSizes = new Float32Array(sCount);
        for(let i = 0; i < sCount; i++){
            sPositions[i * 3] = (Math.random() - 0.5) * 250;
            sPositions[i * 3 + 1] = (Math.random() - 0.5) * 250;
            sPositions[i * 3 + 2] = (Math.random() - 0.5) * 250;
            sSizes[i] = Math.random() * 0.1 + 0.05;
        }
        const sGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        sGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](sPositions, 3));
        sGeo.setAttribute("size", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](sSizes, 1));
        const sMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
            color: 0xffffff,
            size: 0.1,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        });
        const stars = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Points"](sGeo, sMat);
        scene.add(stars);
        // Add some colorful energy particles
        const energyCount = 300;
        const ePositions = new Float32Array(energyCount * 3);
        const eColors = new Float32Array(energyCount * 3);
        for(let i = 0; i < energyCount; i++){
            ePositions[i * 3] = (Math.random() - 0.5) * 40;
            ePositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
            ePositions[i * 3 + 2] = (Math.random() - 0.5) * 40;
            // Purple/pink energy colors
            eColors[i * 3] = Math.random() * 0.8 + 0.2; // R
            eColors[i * 3 + 1] = Math.random() * 0.4; // G
            eColors[i * 3 + 2] = Math.random() * 0.8 + 0.2; // B
        }
        const eGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        eGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](ePositions, 3));
        eGeo.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](eColors, 3));
        const eMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
            size: 0.06,
            transparent: true,
            opacity: 0.5,
            sizeAttenuation: true,
            vertexColors: true,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        });
        const energyParticles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Points"](eGeo, eMat);
        scene.add(energyParticles);
        // Floating data nodes (small cubes orbiting)
        const nodeGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        const nodeGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](0.12, 0.12, 0.12);
        const nodeMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0x2dd4bf,
            emissive: 0x2dd4bf,
            emissiveIntensity: 0.8,
            wireframe: true
        });
        const nodes = [];
        for(let i = 0; i < 12; i++){
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](nodeGeo.clone(), nodeMat.clone());
            const angle = i / 12 * Math.PI * 2;
            const radius = 4.5 + Math.random() * 2;
            const speed = 0.2 + Math.random() * 0.3;
            const yOffset = (Math.random() - 0.5) * 4;
            nodes.push({
                mesh,
                angle,
                radius,
                speed,
                yOffset
            });
            nodeGroup.add(mesh);
        }
        scene.add(nodeGroup);
        // Mouse
        const mouse = {
            x: 0,
            y: 0
        };
        const handleMouse = (e)=>{
            mouse.x = e.clientX / window.innerWidth * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouse);
        // Animate
        const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$170$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clock"]();
        let animId;
        const animate = ()=>{
            animId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();
            // Sphere breathe + rotate
            const breathe = 1 + Math.sin(t * 0.5) * 0.08;
            cyberSphere.scale.setScalar(breathe);
            cyberSphere.rotation.x = t * 0.12;
            cyberSphere.rotation.y = t * 0.18;
            cyberSphere.position.y = Math.sin(t * 0.4) * 0.4;
            // Distort icosahedron vertices
            const icoPos = icoGeo.attributes.position;
            for(let i = 0; i < icoPos.count; i++){
                const ix = icoPos.getX(i);
                const iy = icoPos.getY(i);
                const iz = icoPos.getZ(i);
                const len = Math.sqrt(ix * ix + iy * iy + iz * iz);
                const noise = Math.sin(ix * 3 + t * 2) * Math.cos(iy * 3 + t * 1.5) * 0.05;
                const scale = (2.5 + noise) / len;
                icoPos.setXYZ(i, ix * scale, iy * scale, iz * scale);
            }
            icoPos.needsUpdate = true;
            // Inner core
            innerCore.rotation.x = -t * 0.3;
            innerCore.rotation.z = t * 0.25;
            innerCore.rotation.y = t * 0.15;
            innerCore.position.y = Math.sin(t * 0.6) * 0.2;
            // Orb pulse
            const orbScale = 0.8 + Math.sin(t * 2) * 0.2;
            orb.scale.setScalar(orbScale);
            orb.material.opacity = 0.4 + Math.sin(t * 3) * 0.3;
            // Rings
            rings[0].rotation.x = t * 0.3;
            rings[0].rotation.z = t * 0.08;
            rings[1].rotation.y = t * 0.25;
            rings[1].rotation.x = Math.PI / 3 + t * 0.12;
            rings[2].rotation.z = -t * 0.15;
            rings[2].rotation.y = t * 0.2;
            // DNA helix rotation
            helixGroup.rotation.y = t * 0.15;
            // Data nodes orbit
            for (const node of nodes){
                node.angle += node.speed * 0.01;
                node.mesh.position.x = Math.cos(node.angle) * node.radius;
                node.mesh.position.z = Math.sin(node.angle) * node.radius;
                node.mesh.position.y = node.yOffset + Math.sin(t + node.angle) * 0.5;
                node.mesh.rotation.x = t * 0.5;
                node.mesh.rotation.y = t * 0.3;
            }
            // Particles slow rotation
            particles.rotation.y = t * 0.015;
            particles.rotation.x = t * 0.008;
            // Animate particle colors
            const pPos = pGeo.attributes.position;
            const pCol = pGeo.attributes.color;
            for(let i = 0; i < pCount; i++){
                const timeOffset = i * 0.1;
                const colorShift = (Math.sin(t * 0.5 + timeOffset) + 1) * 0.5;
                // Cycle through colors
                const baseColors = [
                    [
                        0.133,
                        0.827,
                        0.933
                    ],
                    [
                        0.176,
                        0.831,
                        0.749
                    ],
                    [
                        0.024,
                        0.714,
                        0.831
                    ]
                ];
                const colorIndex = Math.floor((t * 0.2 + timeOffset) % baseColors.length);
                const nextIndex = (colorIndex + 1) % baseColors.length;
                pCol.setXYZ(i, baseColors[colorIndex][0] * (1 - colorShift) + baseColors[nextIndex][0] * colorShift, baseColors[colorIndex][1] * (1 - colorShift) + baseColors[nextIndex][1] * colorShift, baseColors[colorIndex][2] * (1 - colorShift) + baseColors[nextIndex][2] * colorShift);
            }
            pCol.needsUpdate = true;
            // Stars rotation with twinkle effect
            stars.rotation.y = t * 0.002;
            stars.rotation.x = t * 0.001;
            // Animate star sizes for twinkling
            const sSizesAttr = sGeo.attributes.size;
            for(let i = 0; i < sCount; i++){
                const twinkle = 0.8 + Math.sin(t * 2 + i * 0.1) * 0.3;
                sSizesAttr.setX(i, sSizes[i] * twinkle);
            }
            sSizesAttr.needsUpdate = true;
            // Energy particles animation
            energyParticles.rotation.y = t * 0.02;
            energyParticles.rotation.x = t * 0.01;
            const ePos = eGeo.attributes.position;
            const eCol = eGeo.attributes.color;
            for(let i = 0; i < energyCount; i++){
                // Pulsing movement
                const pulse = Math.sin(t * 1.5 + i * 0.2) * 0.5 + 0.5;
                const originalY = ePositions[i * 3 + 1];
                ePos.setY(i, originalY + pulse * 2);
                // Color cycling
                const hue = (t * 0.3 + i * 0.01) % 1;
                const rgb = [
                    Math.sin(hue * Math.PI * 2) * 0.5 + 0.5,
                    Math.sin(hue * Math.PI * 2 + 2) * 0.3 + 0.3,
                    Math.sin(hue * Math.PI * 2 + 4) * 0.5 + 0.5
                ];
                eCol.setXYZ(i, rgb[0], rgb[1], rgb[2]);
            }
            ePos.needsUpdate = true;
            eCol.needsUpdate = true;
            // Camera follows mouse
            camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.02;
            camera.position.y += (mouse.y * 0.8 - camera.position.y) * 0.02;
            camera.lookAt(0, 0, 0);
            // Pulsing lights
            light1.intensity = 1.5 + Math.sin(t * 2) * 0.5;
            light2.intensity = 0.8 + Math.sin(t * 1.5 + 1) * 0.3;
            renderer.render(scene, camera);
        };
        animate();
        const handleResize = ()=>{
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            cancelAnimationFrame(animId);
            window.removeEventListener("mousemove", handleMouse);
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "absolute inset-0 z-0"
    }, void 0, false, {
        fileName: "[project]/components/three-scene.tsx",
        lineNumber: 426,
        columnNumber: 10
    }, this);
}
}}),
"[project]/components/three-scene.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/three-scene.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=components_three-scene_tsx_d11dd720._.js.map