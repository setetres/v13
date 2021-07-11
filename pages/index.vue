<template>
  <div class="flex flex-col">
    <div id="test" class="pointer-events-none"></div>
  </div>
</template>
<script>
import * as THREE from '../node_modules/three/build/three.module.js'
import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js'

export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  head() {
    return {
      title: 'Sete Três',
    }
  },
  mounted() {
    this.$nextTick(() => {
      let camera, scene, renderer, object

      const frame = document.querySelector('#frame')
      const container = document.querySelector('#test')

      let mouseX = 0
      let mouseY = 0

      let windowHalfX = frame.clientWidth / 2
      let windowHalfY = frame.clientHeight / 2

      init()
      animate()

      function init() {
        camera = new THREE.PerspectiveCamera(
          1,
          frame.clientWidth / frame.clientHeight,
          1,
          2000
        )
        camera.position.z = 250

        // scene

        scene = new THREE.Scene()

        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xffffff, 0.8)
        camera.add(pointLight)
        scene.add(camera)

        // manager

        function loadModel() {
          object.traverse(function (child) {
            if (child.isMesh) child.material.map = texture
          })

          object.position.y = 0
          scene.add(object)
        }

        const manager = new THREE.LoadingManager(loadModel)

        manager.onProgress = function (item, loaded, total) {
          // console.log(item, loaded, total)
        }

        // texture

        const random = Math.floor(Math.random() * 3) + 0
        const bigSize = [
          '/texture-01.jpg',
          '/texture-02.jpg',
          '/texture-03.jpg',
        ]
        // document.body.style.backgroundImage = bigSize[random]

        const textureLoader = new THREE.TextureLoader(manager)
        const texture = textureLoader.load(bigSize[random])

        // model

        function onProgress(xhr) {
          if (xhr.lengthComputable) {
            // const percentComplete = (xhr.loaded / xhr.total) * 100
            // console.log(
            //   'model ' + Math.round(percentComplete, 2) + '% downloaded'
            // )
          }
        }

        function onError() {}

        const loader = new OBJLoader(manager)
        loader.load(
          'sigil.obj',
          function (obj) {
            object = obj
          },
          onProgress,
          onError
        )

        // renderer

        renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(frame.clientWidth, frame.clientHeight)
        container.appendChild(renderer.domElement)

        document.addEventListener('mousemove', onDocumentMouseMove)
        window.addEventListener('resize', onWindowResize)
      }

      function onWindowResize() {
        windowHalfX = frame.clientWidth / 2
        windowHalfY = frame.clientHeight / 2

        camera.aspect = frame.clientWidth / frame.clientHeight
        camera.updateProjectionMatrix()

        renderer.setSize(frame.clientWidth, frame.clientHeight)
      }

      function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) / 2
        mouseY = (event.clientY - windowHalfY) / 2
      }

      //

      function animate() {
        requestAnimationFrame(animate)
        render()
      }

      function render() {
        camera.position.x += (mouseX - camera.position.x) * 0.05
        camera.position.y += (-mouseY - camera.position.y) * 0.05

        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }
    })
  },
}
</script>
