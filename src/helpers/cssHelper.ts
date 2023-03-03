var root = document.querySelector(":root") as HTMLElement;
var rootStyles = getComputedStyle(root);

/**
 *
 * @param property The root property
 * @returns The value for that property
 */
export function rootVarGetter(property: string) {
  return rootStyles.getPropertyValue(property);
}

/**
 *
 * @param property The root property
 * @param newVal The updated value for that property
 */
export function rootVarSetter(property: string, newVal: string) {
  root.style.setProperty(property, newVal);
}
