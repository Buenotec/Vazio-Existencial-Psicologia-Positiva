import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

interface ThreeCanvasProps {
  mode: 'hero' | 'void' | 'noetic' | 'triad' | 'flow' | 'reframing' | 'synthesis' | 'leadership';
  interactive?: boolean;
  className?: string;
  theme?: 'dark' | 'light';
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  mode,
  interactive = true,
  className = '',
  theme = 'dark',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    const isDark = themeRef.current === 'dark';
    scene.fog = new THREE.FogExp2(isDark ? 0x06070a : 0xf1f5f9, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.25 : 1.1;

    container.appendChild(renderer.domElement);

    // Studio Environment
    try {
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      pmrem.dispose();
    } catch {
      // fallback
    }

    // Balanced Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.45 : 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f0ff, 2.2);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xa855f7, 2.0);
    fillLight.position.set(-6, -4, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x10b981, 1.8);
    rimLight.position.set(0, 7, -6);
    scene.add(rimLight);

    // Root Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Core Sphere (The Self / Purpose)
    const coreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x005577,
      emissiveIntensity: 0.8,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // 2. Sacred Torus Knot / Framework
    const knotGeo = new THREE.TorusKnotGeometry(1.6, 0.07, 128, 24, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    masterGroup.add(knotMesh);

    // 3. Concentric Noetic Rings (Somático, Psíquico, Noético)
    const ringsGroup = new THREE.Group();
    masterGroup.add(ringsGroup);

    // Somatic Ring (Inner) - Red / Rose
    const ring1Geo = new THREE.TorusGeometry(1.2, 0.035, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0xf43f5e,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ringsGroup.add(ring1);

    // Psychic Ring (Middle) - Amber / Gold
    const ring2Geo = new THREE.TorusGeometry(2.0, 0.04, 16, 64);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.7,
      metalness: 0.85,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ringsGroup.add(ring2);

    // Noetic Ring (Outer) - Cyan Neon
    const ring3Geo = new THREE.TorusGeometry(2.8, 0.05, 16, 64);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.9,
      metalness: 0.95,
      roughness: 0.1,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 6;
    ringsGroup.add(ring3);

    // 4. Triad Nodes (Authentic Happiness)
    const triadGroup = new THREE.Group();
    masterGroup.add(triadGroup);
    const triadPositions = [
      new THREE.Vector3(0, 2.2, 0),       // Vida Significativa (Apex)
      new THREE.Vector3(-1.9, -1.2, 1.1), // Vida Engajada
      new THREE.Vector3(1.9, -1.2, -1.1), // Vida Agradável
    ];
    const nodeGeo = new THREE.SphereGeometry(0.35, 24, 24);
    const nodeColors = [0x00f0ff, 0x10b981, 0xf59e0b];
    triadPositions.forEach((pos, idx) => {
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[idx],
        emissive: nodeColors[idx],
        emissiveIntensity: 0.8,
        metalness: 0.8,
        roughness: 0.2,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      triadGroup.add(nodeMesh);

      // Connecting struts to center
      const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), pos]);
      const lineMat = new THREE.LineBasicMaterial({
        color: nodeColors[idx],
        transparent: true,
        opacity: 0.65,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      triadGroup.add(line);
    });

    // 5. Flow Particles Field (Stream Corridor)
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x00f0ff);
    const c2 = new THREE.Color(0xa855f7);
    const c3 = new THREE.Color(0x10b981);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const t = (i / particleCount) * Math.PI * 4;
      const radius = 1.8 + Math.sin(t * 2) * 0.8;
      particlePositions[i3] = Math.cos(t) * radius + (Math.random() - 0.5) * 0.6;
      particlePositions[i3 + 1] = ((i / particleCount) - 0.5) * 6 + (Math.random() - 0.5) * 0.3;
      particlePositions[i3 + 2] = Math.sin(t) * radius + (Math.random() - 0.5) * 0.6;

      const mixed = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3;
      particleColors[i3] = mixed.r;
      particleColors[i3 + 1] = mixed.g;
      particleColors[i3 + 2] = mixed.b;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);

    // Mouse Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !interactive) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;
      prevMouseX = clientX;
      prevMouseY = clientY;

      targetRotY += deltaX * 0.006;
      targetRotX += deltaY * 0.006;
      targetRotX = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, targetRotX));
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    domEl.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW && newH) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let frameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      try {
        const gl = renderer.getContext() as WebGL2RenderingContext;
        const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
        gl.flush();
        const poll = () => {
          const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
          if (state === gl.UNSIGNALED) {
            frameId = window.setTimeout(poll, 5);
          } else {
            if (sync) gl.deleteSync(sync);
            frameId = window.setTimeout(cb, 80);
          }
        };
        frameId = window.setTimeout(poll, 5);
      } catch {
        frameId = window.setTimeout(cb, 80);
      }
    }

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Damped User Rotation
      masterGroup.rotation.y = THREE.MathUtils.damp(masterGroup.rotation.y, targetRotY, 8, delta);
      masterGroup.rotation.x = THREE.MathUtils.damp(masterGroup.rotation.x, targetRotX, 8, delta);

      // Procedural Idle Rotations
      knotMesh.rotation.x = time * 0.25;
      knotMesh.rotation.y = time * 0.35;

      ring1.rotation.z += delta * 0.5;
      ring2.rotation.x += delta * 0.4;
      ring3.rotation.y += delta * 0.3;

      triadGroup.rotation.y = -time * 0.2;

      // Dynamic Mode Emphasis
      const currentMode = modeRef.current;
      if (currentMode === 'noetic') {
        ringsGroup.visible = true;
        triadGroup.visible = false;
        particles.visible = true;
        coreMesh.scale.setScalar(1.0 + Math.sin(time * 2) * 0.08);
      } else if (currentMode === 'triad' || currentMode === 'synthesis') {
        ringsGroup.visible = true;
        triadGroup.visible = true;
        particles.visible = true;
        triadGroup.scale.setScalar(1.1);
      } else if (currentMode === 'flow') {
        ringsGroup.visible = false;
        triadGroup.visible = false;
        particles.visible = true;
        particles.rotation.y = time * 0.8;
      } else if (currentMode === 'void') {
        ringsGroup.visible = true;
        triadGroup.visible = false;
        particles.visible = true;
        knotMesh.scale.setScalar(0.7 + Math.sin(time * 1.5) * 0.15);
      } else {
        ringsGroup.visible = true;
        triadGroup.visible = true;
        particles.visible = true;
        coreMesh.scale.setScalar(1.0);
      }

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(animate);
      } else {
        frameId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (isSoftwareGl) {
        clearTimeout(frameId);
      } else {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      domEl.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      coreGeo.dispose();
      coreMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      nodeGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
    />
  );
};
