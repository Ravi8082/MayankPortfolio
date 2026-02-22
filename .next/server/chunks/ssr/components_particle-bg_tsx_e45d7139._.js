module.exports = {

"[project]/components/particle-bg.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ParticleBg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ParticleBg() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animId;
        let mouseX = -999;
        let mouseY = -999;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);
        const colors = [
            "rgba(34,211,238,",
            "rgba(45,212,191,",
            "rgba(6,182,212,"
        ];
        const particles = [];
        const count = Math.min(80, Math.floor(window.innerWidth / 18));
        for(let i = 0; i < count; i++){
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.5 + 0.1,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
        const handleMouse = (e)=>{
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleMouse);
        const animate = ()=>{
            animId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const p of particles){
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                // Mouse repulsion
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    p.vx += dx / dist * force * 0.3;
                    p.vy += dy / dist * force * 0.3;
                }
                // Dampen velocity
                p.vx *= 0.98;
                p.vy *= 0.98;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${p.alpha})`;
                ctx.fill();
            }
            // Draw connections
            for(let i = 0; i < particles.length; i++){
                for(let j = i + 1; j < particles.length; j++){
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const alpha = (150 - dist) / 150 * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };
        animate();
        return ()=>{
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "pointer-events-none fixed inset-0 z-0",
        style: {
            opacity: 0.5
        },
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/particle-bg.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/particle-bg.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/particle-bg.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=components_particle-bg_tsx_e45d7139._.js.map