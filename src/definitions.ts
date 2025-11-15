import type { PluginListenerHandle } from '@capacitor/core';

import type { NavigationBarPluginEvents } from './navigationbar.events';

export interface NavigationBarPlugin {
  /**
   * Display the navigation bar.
   * 
   * Shows the navigation bar if it was previously hidden. This method will animate
   * the navigation bar back into view.
   * 
   * @platform Android - Fully supported
   * @platform iOS - No effect (iOS navigation bar behavior is controlled by the system)
   * @platform Web - No effect (not applicable to web browsers)
   * 
   * @returns A promise that resolves when the navigation bar is shown
   * 
   * @example
   * ```typescript
   * await NavigationBar.show();
   * ```
   */
  show(): Promise<void>;

  /**
   * Hide the navigation bar.
   * 
   * Hides the navigation bar from view. This is useful for immersive experiences
   * like games, video players, or full-screen content. The bar can be temporarily
   * revealed by swiping from the bottom of the screen.
   * 
   * @platform Android - Fully supported
   * @platform iOS - No effect (iOS navigation bar behavior is controlled by the system)
   * @platform Web - No effect (not applicable to web browsers)
   * 
   * @returns A promise that resolves when the navigation bar is hidden
   * 
   * @example
   * ```typescript
   * await NavigationBar.hide();
   * ```
   * 
   * @see {@link show} to display the navigation bar again
   */
  hide(): Promise<void>;

  /**
   * Change the color of the navigation bar.
   * 
   * Sets a custom background color for the navigation bar. Supports standard hex colors
   * as well as alpha (transparency) values for semi-transparent bars.
   * 
   * @platform Android - Fully supported (API 21+)
   * @platform iOS - No effect (iOS navigation bar color cannot be changed)
   * @platform Web - No effect (not applicable to web browsers)
   * 
   * @param options - Color configuration options
   * @param options.color - Hex color value (e.g., '#FF0000' or '#80FF0000' with alpha)
   * @param options.darkButtons - Optional. When true, uses dark navigation buttons for light backgrounds
   * 
   * @returns A promise that resolves when the color is changed
   * 
   * @example
   * ```typescript
   * // Set to red with dark buttons
   * await NavigationBar.setColor({ color: '#FF0000', darkButtons: true });
   * 
   * // Set to semi-transparent blue
   * await NavigationBar.setColor({ color: '#8000FF00' });
   * ```
   * 
   * @remarks
   * - Alpha channel is supported: use 8-character hex codes (e.g., '#80FFFFFF' for 50% transparent white)
   * - The darkButtons option helps ensure navigation buttons are visible against your chosen background
   * - On older Android versions (< API 21), this method may have no effect
   */
  setColor(options: ColorParameters): Promise<void>;

  /**
   * Set the transparency of the navigation bar.
   * 
   * Makes the navigation bar fully transparent, allowing content to be displayed beneath it.
   * This is useful for creating immersive, edge-to-edge layouts.
   * 
   * @platform Android - Fully supported
   * @platform iOS - No effect (iOS navigation bar transparency is controlled by the system)
   * @platform Web - No effect (not applicable to web browsers)
   * 
   * @param options - Transparency configuration
   * @param options.isTransparent - When true, makes the navigation bar transparent
   * 
   * @returns A promise that resolves when the transparency is set
   * 
   * @example
   * ```typescript
   * // Make navigation bar transparent
   * await NavigationBar.setTransparency({ isTransparent: true });
   * 
   * // Make navigation bar opaque
   * await NavigationBar.setTransparency({ isTransparent: false });
   * ```
   * 
   * @remarks
   * - When transparent, ensure your content layout accounts for the navigation bar area
   * - Use in combination with darkButtons option in setColor() to ensure button visibility
   */
  setTransparency(options: { isTransparent: boolean }): Promise<void>;

  /**
   * Gets the current color of the navigation bar.
   * 
   * Retrieves the current background color of the navigation bar as a hexadecimal string.
   * This is useful for saving and restoring the navigation bar state.
   * 
   * @platform Android - Fully supported
   * @platform iOS - Returns default value (not applicable)
   * @platform Web - Returns default value (not applicable)
   * 
   * @returns A promise that resolves with an object containing the current color in hex format
   * 
   * @example
   * ```typescript
   * const result = await NavigationBar.getColor();
   * console.log('Current color:', result.color); // e.g., '#FF0000'
   * ```
   * 
   * @remarks
   * - The returned color will include alpha channel if previously set
   * - On platforms where this feature is not supported, returns a default color value
   */
  getColor(): Promise<{ color: string }>;

  /**
   * Listen for navigation bar show events.
   * 
   * Registers a callback that will be invoked whenever the navigation bar is displayed.
   * This can occur when calling show() or through system interactions.
   * 
   * @param event - The event type (NavigationBarPluginEvents.SHOW)
   * @param listenerFunc - Callback function to execute when the event fires
   * 
   * @returns A promise that resolves to a listener handle that can be used to remove the listener
   * 
   * @example
   * ```typescript
   * const listener = await NavigationBar.addListener(
   *   NavigationBarPluginEvents.SHOW,
   *   () => {
   *     console.log('Navigation bar was shown');
   *   }
   * );
   * 
   * // Later, remove the listener
   * await listener.remove();
   * ```
   */
  addListener(event: NavigationBarPluginEvents.SHOW, listenerFunc: () => void): Promise<PluginListenerHandle>;

  /**
   * Listen for navigation bar hide events.
   * 
   * Registers a callback that will be invoked whenever the navigation bar is hidden.
   * This can occur when calling hide() or through system interactions.
   * 
   * @param event - The event type (NavigationBarPluginEvents.HIDE)
   * @param listenerFunc - Callback function to execute when the event fires
   * 
   * @returns A promise that resolves to a listener handle that can be used to remove the listener
   * 
   * @example
   * ```typescript
   * const listener = await NavigationBar.addListener(
   *   NavigationBarPluginEvents.HIDE,
   *   () => {
   *     console.log('Navigation bar was hidden');
   *   }
   * );
   * 
   * // Later, remove the listener
   * await listener.remove();
   * ```
   */
  addListener(event: NavigationBarPluginEvents.HIDE, listenerFunc: () => void): Promise<PluginListenerHandle>;

  /**
   * Listen for navigation bar color change events.
   * 
   * Registers a callback that will be invoked whenever the navigation bar color is changed.
   * The callback receives the new color value.
   * 
   * @param event - The event type (NavigationBarPluginEvents.COLOR_CHANGE)
   * @param listenerFunc - Callback function to execute when the event fires, receives an object with the new color
   * 
   * @returns A promise that resolves to a listener handle that can be used to remove the listener
   * 
   * @example
   * ```typescript
   * const listener = await NavigationBar.addListener(
   *   NavigationBarPluginEvents.COLOR_CHANGE,
   *   (result) => {
   *     console.log('Navigation bar color changed to:', result.color);
   *   }
   * );
   * 
   * // Later, remove the listener
   * await listener.remove();
   * ```
   */
  addListener(
    event: NavigationBarPluginEvents.COLOR_CHANGE,
    listenerFunc: (returnObject: { color: string }) => void,
  ): Promise<PluginListenerHandle>;
}

export interface ColorParameters {
  /**
   * Sets the new color of the navigation bar.
   * 
   * Accepts hexadecimal color values in the following formats:
   * - 6-character hex: '#RRGGBB' (e.g., '#FF0000' for red)
   * - 8-character hex: '#AARRGGBB' (e.g., '#80FF0000' for semi-transparent red)
   * 
   * The alpha channel (first two characters in 8-character format) controls transparency:
   * - '00' = fully transparent
   * - '80' = 50% transparent
   * - 'FF' = fully opaque
   * 
   * @example '#FF0000' - Solid red
   * @example '#80FFFFFF' - 50% transparent white
   * @example '#00000000' - Fully transparent
   */
  color: string;

  /**
   * Sets whether the default navigation bar buttons should be black or white.
   * 
   * This option controls the color of the system navigation buttons (back, home, recents)
   * to ensure they remain visible against your chosen background color.
   * 
   * - `true`: Uses dark/black buttons (recommended for light backgrounds)
   * - `false`: Uses light/white buttons (recommended for dark backgrounds)
   * - `undefined`: System determines button color automatically
   * 
   * @default false
   * 
   * @example
   * ```typescript
   * // Light background with dark buttons
   * { color: '#FFFFFF', darkButtons: true }
   * 
   * // Dark background with light buttons
   * { color: '#000000', darkButtons: false }
   * ```
   * 
   * @platform Android - Supported on API 26 (Android 8.0) and above
   * @platform iOS - Not applicable
   * @platform Web - Not applicable
   */
  darkButtons?: boolean;
}
