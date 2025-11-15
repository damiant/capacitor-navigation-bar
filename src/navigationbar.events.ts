export enum NavigationBarPluginEvents {
  /**
   * Called after the navigation bar is displayed.
   * 
   * This event fires when the navigation bar becomes visible, either through
   * a programmatic call to show() or through system interactions (e.g., user
   * swiping to reveal the bar).
   * 
   * @platform Android - Fires when navigation bar is shown
   * @platform iOS - Not fired (iOS manages navigation bar visibility)
   * @platform Web - Not fired (not applicable)
   * 
   * @example
   * ```typescript
   * NavigationBar.addListener(NavigationBarPluginEvents.SHOW, () => {
   *   console.log('Navigation bar is now visible');
   *   // Update UI or adjust layout if needed
   * });
   * ```
   */
  SHOW = 'onShow',

  /**
   * Called after the navigation bar is hidden.
   * 
   * This event fires when the navigation bar becomes hidden, either through
   * a programmatic call to hide() or through system interactions.
   * 
   * @platform Android - Fires when navigation bar is hidden
   * @platform iOS - Not fired (iOS manages navigation bar visibility)
   * @platform Web - Not fired (not applicable)
   * 
   * @example
   * ```typescript
   * NavigationBar.addListener(NavigationBarPluginEvents.HIDE, () => {
   *   console.log('Navigation bar is now hidden');
   *   // Enter immersive mode, adjust layout, etc.
   * });
   * ```
   */
  HIDE = 'onHide',

  /**
   * Called after the navigation bar color is changed.
   * 
   * This event fires when the navigation bar background color is updated through
   * a call to setColor(). The event callback receives the new color value.
   * 
   * @platform Android - Fires when navigation bar color changes
   * @platform iOS - Not fired (iOS navigation bar color cannot be changed)
   * @platform Web - Not fired (not applicable)
   * 
   * @example
   * ```typescript
   * NavigationBar.addListener(
   *   NavigationBarPluginEvents.COLOR_CHANGE,
   *   (result) => {
   *     console.log('New navigation bar color:', result.color);
   *     // Update theme or save preference
   *   }
   * );
   * ```
   * 
   * @see {@link NavigationBarPlugin.setColor}
   */
  COLOR_CHANGE = 'onColorChange',
}
