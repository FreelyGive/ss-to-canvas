import { userEvent } from "storybook/test";

// Configuration
const DELAY = 100; // ms between each interaction
const CURSOR_DISPLAY_DURATION = 300; // ms to show cursor before clicking

// Inject styles once
const injectStyles = (() => {
  let injected = false;
  return () => {
    if (injected) return;
    injected = true;

    const style = document.createElement("style");
    style.textContent = `
      .test-cursor {
        position: fixed;
        width: 24px;
        height: 24px;
        pointer-events: none;
        z-index: 999999;
        filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.5));
        opacity: 0;
        transition: opacity 0.1s;
      }
      .test-cursor--visible {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  };
})();

let cursorElement: HTMLElement | null = null;

const getCursor = (): HTMLElement => {
  injectStyles();
  if (!cursorElement) {
    cursorElement = document.createElement("div");
    cursorElement.className = "test-cursor";
    cursorElement.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4L10.5 20L12.5 13.5L19 11.5L4 4Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
    `;
    cursorElement.style.left = "-100px";
    cursorElement.style.top = "-100px";
    document.body.appendChild(cursorElement);
  }
  return cursorElement;
};

const positionCursorAt = (element: Element): void => {
  const cursor = getCursor();
  const rect = element.getBoundingClientRect();
  cursor.style.left = `${rect.left + rect.width / 2}px`;
  cursor.style.top = `${rect.top + rect.height / 2}px`;
};

const showCursor = (): void => {
  getCursor().classList.add("test-cursor--visible");
};

const hideCursor = (): void => {
  getCursor().classList.remove("test-cursor--visible");
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const baseUser = userEvent.setup({ delay: DELAY });

export const user = {
  async click(element: Element) {
    positionCursorAt(element);
    showCursor();
    await sleep(CURSOR_DISPLAY_DURATION);
    hideCursor();
    await baseUser.click(element);
  },

  async dblClick(element: Element) {
    positionCursorAt(element);
    showCursor();
    await sleep(CURSOR_DISPLAY_DURATION);
    hideCursor();
    await baseUser.dblClick(element);
  },

  async type(element: Element, text: string) {
    await baseUser.type(element, text);
  },

  async clear(element: Element) {
    await baseUser.clear(element);
  },

  async keyboard(text: string) {
    await baseUser.keyboard(text);
  },

  async hover(element: Element) {
    await baseUser.hover(element);
  },

  async tab(options?: { shift?: boolean }) {
    await baseUser.tab(options);
  },

  async pointer(input: Parameters<typeof baseUser.pointer>[0]) {
    await baseUser.pointer(input);
  },

  async selectOptions(
    element: Element,
    values: string | string[] | HTMLElement | HTMLElement[],
  ) {
    positionCursorAt(element);
    showCursor();
    await sleep(CURSOR_DISPLAY_DURATION);
    hideCursor();
    await baseUser.selectOptions(element, values);
  },

  async upload(element: HTMLElement, files: File | File[]) {
    positionCursorAt(element);
    showCursor();
    await sleep(CURSOR_DISPLAY_DURATION);
    hideCursor();
    await baseUser.upload(element, files);
  },
};

export const userNoHighlight = baseUser;

/**
 * Helper to pause for animations/transitions in tests
 */
export { sleep };
