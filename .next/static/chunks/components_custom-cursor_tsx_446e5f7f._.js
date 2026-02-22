(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_custom-cursor_tsx_446e5f7f._.js", {

"[project]/components/custom-cursor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CustomCursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CustomCursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const dot = dotRef.current;
            const ring = ringRef.current;
            if (!dot || !ring) return;
            let mouseX = 0;
            let mouseY = 0;
            let ringX = 0;
            let ringY = 0;
            const move = {
                "CustomCursor.useEffect.move": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
                    if (!isVisible) setIsVisible(true);
                }
            }["CustomCursor.useEffect.move"];
            const enter = {
                "CustomCursor.useEffect.enter": ()=>setIsVisible(true)
            }["CustomCursor.useEffect.enter"];
            const leave = {
                "CustomCursor.useEffect.leave": ()=>setIsVisible(false)
            }["CustomCursor.useEffect.leave"];
            const checkHover = {
                "CustomCursor.useEffect.checkHover": (e)=>{
                    const target = e.target;
                    const interactive = target.closest("a, button, [role='button'], input, textarea, select");
                    setIsHovering(!!interactive);
                }
            }["CustomCursor.useEffect.checkHover"];
            window.addEventListener("mousemove", move);
            window.addEventListener("mousemove", checkHover);
            document.addEventListener("mouseenter", enter);
            document.addEventListener("mouseleave", leave);
            let animId;
            const animateRing = {
                "CustomCursor.useEffect.animateRing": ()=>{
                    animId = requestAnimationFrame(animateRing);
                    ringX += (mouseX - ringX) * 0.12;
                    ringY += (mouseY - ringY) * 0.12;
                    ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${isHovering ? 1.6 : 1})`;
                }
            }["CustomCursor.useEffect.animateRing"];
            animateRing();
            return ({
                "CustomCursor.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("mousemove", move);
                    window.removeEventListener("mousemove", checkHover);
                    document.removeEventListener("mouseenter", enter);
                    document.removeEventListener("mouseleave", leave);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isHovering,
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden lg:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-primary",
                style: {
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s",
                    mixBlendMode: "difference"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/custom-cursor.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                className: "pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full border border-primary/50",
                style: {
                    opacity: isVisible ? 0.6 : 0,
                    transition: "opacity 0.3s, border-color 0.3s",
                    borderColor: isHovering ? "hsl(185 80% 55%)" : "hsl(185 80% 55% / 0.4)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/custom-cursor.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom-cursor.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(CustomCursor, "yxVF37vPZ1z+skncqta77wsR+uk=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/custom-cursor.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/custom-cursor.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=components_custom-cursor_tsx_446e5f7f._.js.map