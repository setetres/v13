<template>
  <main
    class="min-w-0 flex items-center justify-center min-h-screen overflow-visible px-16 main-tabs"
  >
    <svg
      class="w-16 flex-shrink-0 mr-8"
      viewBox="0 0 75 137"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="fill-current text-black"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.97 1.2v21.12c0 .96.238 1.2 1.194.96 5.253-.96 9.55-3.36 13.371-7.68 3.582-4.08 5.492-8.88 5.97-14.4 0-.72.477-1.2 1.433-1.2H43.3c.717 0 1.194.48 1.194 1.2v21.12c0 .96.239 1.2 1.194.96 5.253-.96 9.79-3.36 13.372-7.68 3.582-4.08 5.492-8.88 5.97-14.4 0-.72.477-1.2 1.432-1.2h3.343C70.522 0 71 .48 71 1.2v25.44c0 5.28-1.433 10.32-4.06 14.64-2.626 4.56-5.969 8.16-10.267 10.8-.477.48-.716.72-.716 1.2s.239.96.716 1.2c2.865 1.68 5.253 3.84 7.402 6.48 2.15 2.64 3.82 5.52 5.015 8.88C70.284 73.2 71 76.56 71 79.92v28.214c0 .96-.478 1.2-1.194 1.2h-3.343c-.955 0-1.433-.24-1.433-1.2-.477-5.28-2.387-10.08-5.97-14.4-3.82-4.08-8.118-6.72-13.371-7.68-.955 0-1.194.48-1.194.96v48.12c0 .96-.477 1.2-1.433 1.2h-3.104c-.955 0-1.432-.24-1.432-1.2v-67.08c0-.96.477-1.44 1.432-1.44h3.104c.956 0 1.433.48 1.433 1.44v10.8c0 .72.239 1.2 1.194 1.2 6.925.96 12.894 4.08 17.67 9.36.239.48.477.48.955.24.478 0 .716-.48.716-.96V79.92c0-6.24-2.149-11.52-6.447-16.08-4.298-4.56-9.551-7.2-15.76-7.68-.955 0-1.193-.24-1.193-1.2V51.6c0-.96.238-1.44 1.194-1.44 6.208-.24 11.461-2.64 15.76-7.2 4.297-4.56 6.446-10.08 6.446-16.32v-6c0-.48-.238-.72-.716-.96-.477 0-.716 0-.955.24-5.212 5.676-11.61 8.969-19.012 9.518-.577 6.279-3.108 11.826-7.275 16.643-5.014 5.76-10.984 8.88-18.147 9.84-.717.24-.955.48-.955.96v17.822l7.34-7.341c.482-.481 1.203-.481 1.925 0l2.404 2.404c.481.722.481 1.443 0 1.924l-9.378 9.139c-.722.721-.722 1.442 0 1.923l9.378 9.38c.481.72.481 1.442 0 1.923l-2.404 2.405c-.722.721-1.443.721-1.924 0l-6.836-6.836v18.701c0 1.036-.518 1.295-1.554 1.295h-3.367c-1.036 0-1.554-.259-1.554-1.295V89.088l-7.37 7.37c-.722.722-1.444.722-1.925 0L.541 94.055c-.721-.48-.721-1.202 0-1.924l9.138-9.379c.481-.48.481-1.202 0-1.923L.541 71.689c-.721-.48-.721-1.202 0-1.923l2.164-2.405c.481-.481 1.203-.481 1.924 0L12 74.73V54c0-.48 0-.96.478-1.44l1.91-1.68c.239-.48.716-.72 1.432-.72 6.209 0 11.462-2.4 15.999-6.96 4.298-4.56 6.686-10.08 6.686-16.56v-6c0-.48-.239-.72-.717-.96-.477 0-.716 0-.955.24-5.73 6.24-12.655 9.6-21.012 9.6-.478 0-.956 0-1.433-.48l-1.91-1.92C12 26.88 12 26.4 12 25.68V1.2c0-.72.478-1.2 1.433-1.2h3.104c.955 0 1.433.48 1.433 1.2zM71 57a4 4 0 100-8 4 4 0 000 8z"
      />
    </svg>
    <nav class="bg-white rounded-full">
      <div class="filters-container">
        <div class="filters-wrapper">
          <ul class="filter-tabs flex inline-flex">
            <li>
              <button
                class="filter-button filter-active"
                data-translate-value="0"
              >
                New
              </button>
            </li>
            <li>
              <button class="filter-button" data-translate-value="100%">
                Popular
              </button>
            </li>
            <li>
              <button class="filter-button" data-translate-value="200%">
                Following
              </button>
            </li>
          </ul>
          <div class="filter-slider" aria-hidden="true">
            <div class="filter-slider-rect">&nbsp;</div>
          </div>
        </div>
      </div>
      <div class="main-tabs-container">
        <div class="main-tabs-wrapper relative">
          <ul class="main-tabs flex inline-flex">
            <li>
              <button
                class="round-button gallery active"
                data-translate-value="0%"
                data-color="blue"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M2 13h2v2H2zM2 9h2v2H2zM2 5h2v2H2zM6 13h2v2H6zM6 9h2v2H6zM6 5h2v2H6zM12 13h2v2h-2zM12 9h2v2h-2zM12 5h2v2h-2zM2 1h2v2H2z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="100%"
                data-color="green"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M2 13h2v2H2zM2 9h2v2H2zM2 5h2v2H2zM6 13h2v2H6zM6 9h2v2H6zM6 5h2v2H6zM12 13h2v2h-2zM12 9h2v2h-2zM12 5h2v2h-2zM2 1h2v2H2z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="200%"
                data-color="green"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M4.4 1H2.6a.609.609 0 00-.424.17.575.575 0 00-.176.413c0 1.083.442 2.122 1.23 2.888A4.262 4.262 0 006.2 5.667h1.2v2.397c-.39-.39-.856-.7-1.372-.91a4.286 4.286 0 00-1.628-.32H2.6a.609.609 0 00-.424.17.575.575 0 00-.176.413c0 1.083.442 2.121 1.23 2.887A4.262 4.262 0 006.2 11.5h1.2v2.917c0 .154.063.303.176.412a.609.609 0 00.848 0 .575.575 0 00.176-.412V8.583h1.2c1.114 0 2.182-.43 2.97-1.196A4.026 4.026 0 0014 4.5a.575.575 0 00-.176-.412.61.61 0 00-.424-.171h-1.8c-.56 0-1.113.108-1.628.32a4.189 4.189 0 00-1.372.91v-.064a4.027 4.027 0 00-1.23-2.887A4.262 4.262 0 004.4 1zm1.8 3.5a3.053 3.053 0 01-1.898-.657A2.904 2.904 0 013.26 2.167H4.4c.692 0 1.362.232 1.898.657A2.904 2.904 0 017.34 4.5H6.2zm0 5.833a3.053 3.053 0 01-1.898-.657A2.904 2.904 0 013.26 8H4.4c.692 0 1.362.232 1.898.657a2.904 2.904 0 011.042 1.676H6.2zm5.4-5.25h1.14a2.904 2.904 0 01-1.042 1.676 3.053 3.053 0 01-1.898.658H8.66A2.904 2.904 0 019.702 5.74a3.053 3.053 0 011.898-.658z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="300%"
                data-color="green"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M8 1C4.139 1 1 4.139 1 8s3.139 7 7 7 7-3.139 7-7-3.139-7-7-7zm1.503 3.64A8.388 8.388 0 018 4.773a8.388 8.388 0 01-1.503-.133C6.88 2.901 7.514 1.87 8 1.87S9.12 2.9 9.503 4.64zm-.015-2.579a6.087 6.087 0 012.786 1.562 7.035 7.035 0 01-1.916.825c-.206-.943-.501-1.768-.87-2.387zM6.173 7.558c.014-.752.073-1.444.176-2.063.546.088 1.091.147 1.666.147.56 0 1.12-.059 1.665-.147.088.619.147 1.311.177 2.063H6.173zm3.654.884a17.009 17.009 0 01-.162 2.063A10.281 10.281 0 008 10.358c-.56 0-1.12.059-1.665.147a17.009 17.009 0 01-.162-2.063h3.654zM5.642 4.448a7.035 7.035 0 01-1.916-.825 6.223 6.223 0 012.786-1.562c-.369.619-.664 1.444-.87 2.387zm-.147.87a16.038 16.038 0 00-.192 2.255h-3.39a6.161 6.161 0 011.253-3.287c.649.442 1.46.796 2.329 1.032zm-.207 3.124c.015.766.089 1.518.192 2.255-.87.236-1.665.575-2.343 1.031a6.145 6.145 0 01-1.238-3.286h3.39zm.354 3.11c.206.943.501 1.783.87 2.387a6.087 6.087 0 01-2.786-1.562 7.038 7.038 0 011.916-.825zm.855-.192A8.39 8.39 0 018 11.227a8.39 8.39 0 011.503.133C9.12 13.099 8.486 14.13 8 14.13S6.88 13.1 6.497 11.36zm3.86.192a6.635 6.635 0 011.917.84 6.223 6.223 0 01-2.786 1.562c.369-.634.664-1.46.87-2.402zm.148-.87c.118-.722.177-1.488.192-2.255h3.39a6.16 6.16 0 01-1.253 3.287 7.987 7.987 0 00-2.329-1.032zm.207-3.124a18.86 18.86 0 00-.192-2.255c.87-.236 1.665-.575 2.343-1.031a6.116 6.116 0 011.253 3.286h-3.404z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="400%"
                data-color="green"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M11.33 8a3.33 3.33 0 11-6.66 0 3.33 3.33 0 016.66 0zM15 5.021v5.958A4.026 4.026 0 0110.979 15H5.02A4.026 4.026 0 011 10.979V5.02A4.026 4.026 0 015.021 1h5.958A4.026 4.026 0 0115 5.021zm-.894 0a3.132 3.132 0 00-3.127-3.127H5.02A3.131 3.131 0 001.894 5.02v5.958a3.131 3.131 0 003.127 3.127h5.958a3.132 3.132 0 003.127-3.127V5.02zm-1.418-1.307a.758.758 0 00-.274-.334.747.747 0 00-.94.092.759.759 0 00-.203.381.74.74 0 00.11.56c.028.04.059.078.092.114a.827.827 0 00.241.16.76.76 0 00.7-.068 1.07 1.07 0 00.114-.092.725.725 0 00.203-.381.721.721 0 00-.043-.432z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="500%"
                data-color="green"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M14.72 4.43c-.058-.095-.185-.12-.288-.064-.044.025-.086.042-.13.067L12.84 3.062a3.743 3.743 0 00-.577-.923l.928-.087c.07-.003.122-.069.12-.144a.124.124 0 00-.13-.126l-1.147.103c-.046-.042-.09-.092-.128-.133-.36-.338-.91-.286-1.235.11-.253.31-.284.748-.117 1.081L9.1 4.733 7.832 3.552a.474.474 0 00-.5-.089l-.046-.042.202-.245c.05-.057.043-.142-.01-.186-.052-.052-.131-.042-.18.015l-.722.888c-.05.057-.043.142.01.186.052.052.131.042.174-.017l.253-.31.027.022a.559.559 0 00.122.6l.969.9-.751.923-.165-.149c-.051-.052-.13-.042-.18.015L3.196 10.79c-.05.058-.043.143.01.186l.165.15-.548.67c-.027.02-.705 1.4-.705 1.4a.177.177 0 00-.011.14l-.326.405.118.107.326-.405c.045.009.085 0 .13-.033 0 0 1.19-.914 1.202-.937l.547-.67.164.148c.053.044.131.043.173-.016L8.28 7.207c.05-.057.043-.142-.01-.186l-.164-.149.75-.924 2.4 2.239c.197.18.486.16.67-.03.009-.006.016-.004.018-.012l2.753-3.393a.266.266 0 00.023-.322zm-4.563 1.303l-.947-.886 1.431-1.761c.031.04.056.07.095.11.261.243.505.541.615.964-.019.932-.815 1.413-1.194 1.573zm2.997-1.072a3.661 3.661 0 00-.133-1.063l1.012.95c-.36.147-.654.19-.879.113z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="600%"
                data-color="green"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M12.86 2.379h-1.696V2.02a.618.618 0 00-.62-.62.618.618 0 00-.62.62v.359H5.91V2.02a.618.618 0 00-.62-.62.618.618 0 00-.62.62v.359H2.989c-.882 0-1.613.717-1.613 1.613v8.395c0 .882.717 1.613 1.613 1.613h9.884c.883 0 1.613-.717 1.613-1.613V3.992a1.627 1.627 0 00-1.627-1.613zm-9.871 1.24h1.696v.359c0 .344.275.62.62.62s.62-.276.62-.62v-.359h4.012v.359c0 .344.276.62.62.62.345 0 .62-.276.62-.62v-.359h1.696a.37.37 0 01.372.373v1.64H2.617v-1.64a.37.37 0 01.372-.373zm9.87 9.14H2.99a.37.37 0 01-.372-.372V6.859h10.628v5.528a.392.392 0 01-.386.372z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="700%"
                data-color="green"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    class="fill-current text-gray-600"
                    d="M8.7 2.443A5.603 5.603 0 0113.557 7.3h.743a.7.7 0 010 1.4h-.743A5.603 5.603 0 018.7 13.557v.743a.7.7 0 01-1.4 0v-.743A5.603 5.603 0 012.443 8.7H1.7a.7.7 0 010-1.4h.743A5.603 5.603 0 017.3 2.443V1.7a.7.7 0 011.4 0v.743zm0 1.415V4.5a.7.7 0 01-1.4 0v-.642A4.204 4.204 0 003.858 7.3H4.5a.7.7 0 010 1.4h-.642A4.204 4.204 0 007.3 12.142V11.5a.7.7 0 011.4 0v.642A4.204 4.204 0 0012.142 8.7H11.5a.7.7 0 010-1.4h.642A4.204 4.204 0 008.7 3.858z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="800%"
                data-color="purple"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      class="fill-current text-gray-600"
                      d="M13.508 9.112a1.303 1.303 0 00-.242-.343l.844-.393c.333-.156.594-.432.725-.767.13-.336.121-.703-.027-1.021a1.255 1.255 0 00-.254-.355c.266-.165.469-.41.576-.697a1.271 1.271 0 00-.54-1.555 1.373 1.373 0 00-.88-.177 1.251 1.251 0 00-.112-.479 1.297 1.297 0 00-.765-.677 1.424 1.424 0 00-1.055.063L8.458 4.26c.468-.54.704-1.246.287-1.834a1.134 1.134 0 00-.374-.377 1.198 1.198 0 00-.513-.173c-.51-.029-.914.317-1.174.58-.44.471-.919.908-1.43 1.306-1.858 1.142-2.482 2.19-2.842 3.41-.046.154-.07.312-.072.47-.007.193-.017.362-.584.963-.71.747-.446 2.145.076 3.265.157.338.344.661.561.965.724.996 1.562 1.384 2.318 1.057.263-.123.57-.13.986-.124.705-.008 1.476-.272 2.825-.878a.4.4 0 00.056-.026l4.228-1.972c.332-.155.592-.43.724-.763.131-.333.123-.7-.022-1.017zm-7.775 3.735c-.41-.005-.92-.01-1.395.213-.278.119-.737-.188-1.161-.772-.836-1.151-1.103-2.684-.732-3.08.757-.803.825-1.157.84-1.57 0-.08.012-.16.034-.238.255-.852.655-1.777 2.44-2.88.412-.274 1.097-.937 1.598-1.445.273-.276.388-.285.409-.284.02 0 .096.04.189.17.2.284-.22.742-.4.894-.369.318-1.275 1.241-1.306 1.277a.521.521 0 00-.073.1.99.99 0 00-.315.522.917.917 0 00.06.592c.131.282-.053.538-.477 1.014l-.02.021a.465.465 0 00-.104.33c.01.119.067.226.158.302a.47.47 0 00.332.105.5.5 0 00.323-.148l.02-.022c.399-.448.992-1.12.66-1.935a.484.484 0 00.105-.033l5.25-2.448a.448.448 0 01.327-.02.41.41 0 01.237.21.394.394 0 01.009.317.43.43 0 01-.225.237L8.287 6.248a.49.49 0 00-.25.264.447.447 0 00.01.353c.05.11.146.194.263.234a.49.49 0 00.364-.022l4.994-2.329a.44.44 0 01.316-.004c.1.037.181.11.225.206a.403.403 0 01.014.305.44.44 0 01-.207.24L9.022 7.822a.49.49 0 00-.25.265.447.447 0 00.01.352c.05.11.145.194.263.234a.49.49 0 00.364-.022l3.967-1.85a.44.44 0 01.316-.005.403.403 0 01.239.512.44.44 0 01-.207.239l-4.223 1.97a.5.5 0 00-.272.262.458.458 0 00.005.366.44.44 0 00.277.238.482.482 0 00.375-.039l2.19-1.02a.45.45 0 01.338-.036.413.413 0 01.251.215.396.396 0 01.004.33.435.435 0 01-.246.236l-3.425 1.598c-1.948.908-2.684 1.173-3.265 1.179z"
                      fill="#000000"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="900%"
                data-color="orange"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M9.568 5.88a2.216 2.216 0 01-3.134 0c-.094-.094-.22-.094-.345.032l-.439.438c-.125.126-.094.22 0 .314a2.216 2.216 0 010 3.134c-.125.125-.125.25 0 .376l.439.439c.125.125.22.094.345-.032a2.216 2.216 0 013.134 0c.125.126.219.157.344.032l.44-.439c.124-.125.124-.25 0-.376a2.216 2.216 0 010-3.134c.093-.094.124-.188 0-.314l-.44-.438c-.125-.126-.25-.126-.344-.032zM4.984 8.262a2.492 2.492 0 11-4.984 0 2.492 2.492 0 014.984 0zM16 8.262a2.492 2.492 0 11-4.983 0 2.492 2.492 0 014.983 0z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="1000%"
                data-color="orange"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M13.473 6.203c.342-.452.526-1 .526-1.577a2.61 2.61 0 00-.768-1.857A2.61 2.61 0 0011.374 2c-.572 0-1.116.181-1.566.517L2.45 9.905c-.292.43-.449.94-.449 1.47 0 .7.273 1.36.769 1.855A2.61 2.61 0 004.585 14a2.614 2.614 0 001.517-.454l7.371-7.342zM10.094 3.39l.015-.015.007-.008c.336-.335.782-.52 1.257-.52.476 0 .923.185 1.259.52.336.337.52.783.52 1.259 0 .475-.184.922-.52 1.258l-.007.006-.017.015-.298.288.005.007L9.44 9.075 7.508 7.143l-3.778 3.75c-.186.186-.234.449-.27.534-.035.3-.034.726.135 1.005.174.29.415.44.831.712a1.772 1.772 0 01-1.058-.512 1.765 1.765 0 01-.521-1.257c0-.444.164-.868.46-1.195l3.62-3.619-.003-.002 2.865-2.864.305-.305z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="1100%"
                data-color="orange"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M11.273 8.28a1.017 1.017 0 100-2.034 1.017 1.017 0 000 2.034z"
                    fill="#000000"
                  />
                  <path
                    class="fill-current text-gray-600"
                    d="M14.34 4.61l-3.45-3.448A.57.57 0 0010.494 1H2.476c-.31 0-.575.25-.575.575v12.85c0 .31.25.575.575.575h11.465c.31 0 .575-.25.575-.575V5.023a.535.535 0 00-.177-.412zm-4.083-2.46l3.11 3.109v6.072l-1.754-1.769a1.138 1.138 0 00-1.606 0l-.929.943-2.697-2.711a1.601 1.601 0 00-2.254 0L3.05 8.869V2.15h7.206zm-7.206 11.7v-3.36l1.886-1.886a.474.474 0 01.634 0l3.86 3.861c.119.118.251.162.399.162a.57.57 0 00.398-.162.578.578 0 000-.81l-.354-.354.928-.928 2.565 2.579v.913H3.05v-.014z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="round-button"
                data-translate-value="1200%"
                data-color="orange"
              >
                <svg
                  class="w-8 h-auto flex-shrink-0 mr-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path
                    class="fill-current text-gray-600"
                    d="M7.997 1a6.997 6.997 0 100 13.994A6.997 6.997 0 007.997 1zm5.845 6.997a5.826 5.826 0 01-1.323 3.699l-3.702-3.7 3.702-3.695a5.826 5.826 0 011.323 3.696zM4.302 3.48a5.833 5.833 0 017.397 0L7.997 7.183 4.3 3.48zm2.88 4.516l-3.701 3.702a5.833 5.833 0 010-7.398l3.702 3.696zm.815.82l3.702 3.702a5.833 5.833 0 01-7.398 0l3.696-3.702z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </li>
          </ul>
          <div class="main-slider" aria-hidden="true">
            <div class="main-slider-circle">&nbsp;</div>
          </div>
        </div>
      </div>
    </nav>
    <Nuxt />
  </main>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },

  head() {
    return {
      title: 'Sete Três — Newsletter',
    }
  },

  mounted() {
    this.$nextTick(() => {
      // resources in description
      const mainTabs = document.querySelector('.main-tabs')
      const mainSliderCircle = document.querySelector('.main-slider-circle')
      const roundButtons = document.querySelectorAll('.round-button')

      const colors = {
        blue: {
          50: {
            value: '#e3f2fd',
          },
          100: {
            value: '#bbdefb',
          },
        },
        green: {
          50: {
            value: '#e8f5e9',
          },
          100: {
            value: '#c8e6c9',
          },
        },
        purple: {
          50: {
            value: '#f3e5f5',
          },
          100: {
            value: '#e1bee7',
          },
        },
        orange: {
          50: {
            value: '#ffe0b2',
          },
          100: {
            value: '#ffe0b2',
          },
        },
        red: {
          50: {
            value: '#ffebee',
          },
          100: {
            value: '#ffcdd2',
          },
        },
      }

      const getColor = (color, variant) => {
        return colors[color][variant].value
      }

      const handleActiveTab = (tabs, event, className) => {
        tabs.forEach((tab) => {
          tab.classList.remove(className)
        })

        if (!event.target.classList.contains(className)) {
          event.target.classList.add(className)
        }
      }

      mainTabs.addEventListener('click', (event) => {
        const root = document.documentElement
        const targetColor = event.target.dataset.color
        const targetTranslateValue = event.target.dataset.translateValue

        if (event.target.classList.contains('round-button')) {
          mainSliderCircle.classList.remove('animate-jello')
          void mainSliderCircle.offsetWidth // eslint-disable-line
          mainSliderCircle.classList.add('animate-jello')

          root.style.setProperty(
            '--translate-main-slider',
            targetTranslateValue
          )
          root.style.setProperty(
            '--main-slider-color',
            getColor(targetColor, 50)
          )
          root.style.setProperty(
            '--background-color',
            getColor(targetColor, 100)
          )

          handleActiveTab(roundButtons, event, 'active')

          if (!event.target.classList.contains('gallery')) {
            root.style.setProperty('--filters-container-height', '0')
            root.style.setProperty('--filters-wrapper-opacity', '0')
          } else {
            root.style.setProperty('--filters-container-height', '3.8rem')
            root.style.setProperty('--filters-wrapper-opacity', '1')
          }
        }
      })

      const filterTabs = document.querySelector('.filter-tabs')
      const filterButtons = document.querySelectorAll('.filter-button')

      filterTabs.addEventListener('click', (event) => {
        const root = document.documentElement
        const targetTranslateValue = event.target.dataset.translateValue

        if (event.target.classList.contains('filter-button')) {
          root.style.setProperty(
            '--translate-filters-slider',
            targetTranslateValue
          )
          handleActiveTab(filterButtons, event, 'filter-active')
        }
      })
    })
  },
}
</script>
