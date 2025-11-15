<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Navigation Bar</h3>
<p align="center"><strong><code>@webnativellc/capacitor-navigation-bar</code></strong></p>
<p align="center">
  Capacitor plugin for Navigation Bar manipulation.
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2024?style=flat-square" />
  <a href="https://github.com/damiant/capacitor-navigation-bar/actions?query=workflow%3A%22CI%22"><img src="https://img.shields.io/github/workflow/status/damiant/capacitor-navigation-bar/CI/master?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@webnativellc/capacitor-navigation-bar"><img src="https://img.shields.io/npm/l/@webnativellc/capacitor-navigation-bar?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@webnativellc/capacitor-navigation-bar"><img src="https://img.shields.io/npm/dw/@webnativellc/capacitor-navigation-bar?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@webnativellc/capacitor-navigation-bar"><img src="https://img.shields.io/npm/v/@webnativellc/capacitor-navigation-bar?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-5-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<br/>
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F9VPVZKHK4SZW">
  <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="Donate with PayPal button">
</a>
</p>
<br/>
<p align="center">
  <img height="450" src="https://github.com/damiant/capacitor-navigation-bar/blob/master/demoProject/src/assets/example.gif?raw=true">
</p>

## Maintainers

| Maintainer         | GitHub                                      | Social                                                          |
| ------------------ | ------------------------------------------- | --------------------------------------------------------------- |
| Hugo Tomazi        | [hugotomazi](https://github.com/hugotomazi) | [@hugotomazi](https://br.linkedin.com/in/hugo-tomazi-299034101) |
| Damian Tarnawsky   | [damiant](https://github.com/damiant)       | [@damiant.bsky.social](https://bsky.app/profile/damiant.bsky.social) |


## Install

```bash
npm install @webnativellc/capacitor-navigation-bar
npx cap sync
```

## Configuration

No configuration required for this plugin.

## API

<docgen-index>

* [`show()`](#show)
* [`hide()`](#hide)
* [`setColor(...)`](#setcolor)
* [`setTransparency(...)`](#settransparency)
* [`getColor()`](#getcolor)
* [`addListener(NavigationBarPluginEvents.SHOW, ...)`](#addlistenernavigationbarplugineventsshow-)
* [`addListener(NavigationBarPluginEvents.HIDE, ...)`](#addlistenernavigationbarplugineventshide-)
* [`addListener(NavigationBarPluginEvents.COLOR_CHANGE, ...)`](#addlistenernavigationbarplugineventscolor_change-)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### show()

```typescript
show() => Promise<void>
```

Display the navigation bar.

Shows the navigation bar if it was previously hidden. This method will animate
the navigation bar back into view.

--------------------


### hide()

```typescript
hide() => Promise<void>
```

Hide the navigation bar.

Hides the navigation bar from view. This is useful for immersive experiences
like games, video players, or full-screen content. The bar can be temporarily
revealed by swiping from the bottom of the screen.

--------------------


### setColor(...)

```typescript
setColor(options: ColorParameters) => Promise<void>
```

Change the color of the navigation bar.

Sets a custom background color for the navigation bar. Supports standard hex colors
as well as alpha (transparency) values for semi-transparent bars.

| Param         | Type                                                        | Description                   |
| ------------- | ----------------------------------------------------------- | ----------------------------- |
| **`options`** | <code><a href="#colorparameters">ColorParameters</a></code> | - Color configuration options |

--------------------


### setTransparency(...)

```typescript
setTransparency(options: { isTransparent: boolean; }) => Promise<void>
```

Set the transparency of the navigation bar.

Makes the navigation bar fully transparent, allowing content to be displayed beneath it.
This is useful for creating immersive, edge-to-edge layouts.

| Param         | Type                                     | Description                  |
| ------------- | ---------------------------------------- | ---------------------------- |
| **`options`** | <code>{ isTransparent: boolean; }</code> | - Transparency configuration |

--------------------


### getColor()

```typescript
getColor() => Promise<{ color: string; }>
```

Gets the current color of the navigation bar.

Retrieves the current background color of the navigation bar as a hexadecimal string.
This is useful for saving and restoring the navigation bar state.

**Returns:** <code>Promise&lt;{ color: string; }&gt;</code>

--------------------


### addListener(NavigationBarPluginEvents.SHOW, ...)

```typescript
addListener(event: NavigationBarPluginEvents.SHOW, listenerFunc: () => void) => Promise<PluginListenerHandle>
```

Listen for navigation bar show events.

Registers a callback that will be invoked whenever the navigation bar is displayed.
This can occur when calling show() or through system interactions.

| Param              | Type                                                                                 | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **`event`**        | <code><a href="#navigationbarpluginevents">NavigationBarPluginEvents.SHOW</a></code> | - The event type (<a href="#navigationbarpluginevents">NavigationBarPluginEvents.SHOW</a>) |
| **`listenerFunc`** | <code>() =&gt; void</code>                                                           | - Callback function to execute when the event fires                                        |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener(NavigationBarPluginEvents.HIDE, ...)

```typescript
addListener(event: NavigationBarPluginEvents.HIDE, listenerFunc: () => void) => Promise<PluginListenerHandle>
```

Listen for navigation bar hide events.

Registers a callback that will be invoked whenever the navigation bar is hidden.
This can occur when calling hide() or through system interactions.

| Param              | Type                                                                                 | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **`event`**        | <code><a href="#navigationbarpluginevents">NavigationBarPluginEvents.HIDE</a></code> | - The event type (<a href="#navigationbarpluginevents">NavigationBarPluginEvents.HIDE</a>) |
| **`listenerFunc`** | <code>() =&gt; void</code>                                                           | - Callback function to execute when the event fires                                        |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener(NavigationBarPluginEvents.COLOR_CHANGE, ...)

```typescript
addListener(event: NavigationBarPluginEvents.COLOR_CHANGE, listenerFunc: (returnObject: { color: string; }) => void) => Promise<PluginListenerHandle>
```

Listen for navigation bar color change events.

Registers a callback that will be invoked whenever the navigation bar color is changed.
The callback receives the new color value.

| Param              | Type                                                                                         | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **`event`**        | <code><a href="#navigationbarpluginevents">NavigationBarPluginEvents.COLOR_CHANGE</a></code> | - The event type (<a href="#navigationbarpluginevents">NavigationBarPluginEvents.COLOR_CHANGE</a>) |
| **`listenerFunc`** | <code>(returnObject: { color: string; }) =&gt; void</code>                                   | - Callback function to execute when the event fires, receives an object with the new color         |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### Interfaces


#### ColorParameters

| Prop              | Type                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                  | Default            |
| ----------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **`color`**       | <code>string</code>  | Sets the new color of the navigation bar. Accepts hexadecimal color values in the following formats: - 6-character hex: '#RRGGBB' (e.g., '#FF0000' for red) - 8-character hex: '#AARRGGBB' (e.g., '#80FF0000' for semi-transparent red) The alpha channel (first two characters in 8-character format) controls transparency: - '00' = fully transparent - '80' = 50% transparent - 'FF' = fully opaque                                      |                    |
| **`darkButtons`** | <code>boolean</code> | Sets whether the default navigation bar buttons should be black or white. This option controls the color of the system navigation buttons (back, home, recents) to ensure they remain visible against your chosen background color. - `true`: Uses dark/black buttons (recommended for light backgrounds) - `false`: Uses light/white buttons (recommended for dark backgrounds) - `undefined`: System determines button color automatically | <code>false</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Enums


#### NavigationBarPluginEvents

| Members            | Value                        | Description                                                                                                                                                                                                                 |
| ------------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`SHOW`**         | <code>'onShow'</code>        | Called after the navigation bar is displayed. This event fires when the navigation bar becomes visible, either through a programmatic call to show() or through system interactions (e.g., user swiping to reveal the bar). |
| **`HIDE`**         | <code>'onHide'</code>        | Called after the navigation bar is hidden. This event fires when the navigation bar becomes hidden, either through a programmatic call to hide() or through system interactions.                                            |
| **`COLOR_CHANGE`** | <code>'onColorChange'</code> | Called after the navigation bar color is changed. This event fires when the navigation bar background color is updated through a call to setColor(). The event callback receives the new color value.                       |

</docgen-api>

## Changelog

### 7.1.0 (2025-11-15)

#### Features

* **ios:** Add Swift Package Manager (SPM) support ([#XX](https://github.com/damiant/capacitor-navigation-bar/issues/XX))
* **ci:** Update CI workflow to match Capacitor Community best practices
  - Upgraded Node.js from 18 to 20
  - Upgraded Java from 17 to 21
  - Updated GitHub Actions to latest versions (v4)
  - Added dedicated lint job
  - Updated to macOS 15 runner
  - Switched to Zulu Java distribution

#### Internal

* Added comprehensive verify scripts for iOS, Android, and Web platforms
* Improved code quality tooling with ESLint, Prettier, and SwiftLint integration

