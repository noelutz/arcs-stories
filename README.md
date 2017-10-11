# arcs-stories

## Tests

**Test sync & replay of suggestions scenario**:
 * Visit [demo Arc](https://polymerlabs.github.io/arcs-cdn/dev/apps/web/?solo=https://noelutz.github.io/arcs-stories/0.2/Testing/Testing.recipes).
 * Accept only suggestion
 * Add a few messages by filling the text box + hitting <enter>
 * Copy & paste URL into another TAB.
 * **Expectation**: suggestion should automatically be accepted and messages rendered.

**Test profile & replay of profile specific suggestions scenario**:
 * Step 1
   * Visit [demo Arc as Berni](https://polymerlabs.github.io/arcs-cdn/dev/apps/web/?solo=https://noelutz.github.io/arcs-stories/0.2/Testing/Testing.recipes&user=Berni).
   * Accept only suggestion.
   * Add a few messages.
   * Flag Arc as being part of Berni's profile.
 * Step 2
   * Repeat same thing for Matt. Visit [demo Arc as Matt](https://polymerlabs.github.io/arcs-cdn/dev/apps/web/?solo=https://noelutz.github.io/arcs-stories/0.2/Testing/Testing.recipes&user=Matt).
   * Repeat steps above for Matt.
 * Step 3
   * Create a [new demo Arc as Berni](https://polymerlabs.github.io/arcs-cdn/dev/apps/web/?solo=https://noelutz.github.io/arcs-stories/0.2/Testing/Testing.recipes&user=Berni).
   * Accept "Show things".
   * You may need to hit "CTRL+S". RACE :(.
   * **Expectation:** Berni's messages appear from his profile.
 * Step 4
   * Copy & pasting Arc URL into a new TAB but **replace &user=Berni w/ &user=Matt before** hitting <enter>.
   * You may need to hit "CTRL+S". RACE :(.
   * **Expectation:** "Show things" should automatically be accepted and **Matt's** messages should appear.

**Test shared Arc & replay of suggestions scenario**:
 * Step 1
   * Visit [demo Arc as Berni](https://polymerlabs.github.io/arcs-cdn/dev/apps/web/?solo=https://noelutz.github.io/arcs-stories/0.2/Testing/Testing.recipes&user=Berni).
   * Accept only suggestion.
   * Add a few messages.
   * Flag Arc as being shared.
 * Step 2
   * Visit [demo Arc as Matt](https://polymerlabs.github.io/arcs-cdn/dev/apps/web/?solo=https://noelutz.github.io/arcs-stories/0.2/Testing/Testing.recipes&user=Matt).
   * Select Berni as a friend (to pull in Berni's shared views).
   * You may need to hit "CTRL+S". RACE :(.
   * **Expectation:** "Show things" appears and displays Berni's shared things. Editing Berni's views should be reflected in Matt's Arc because the view is mapped.


## Recipes

1. **Hello World using Glitch**. [Code](https://glitch.com/edit/#!/arcs-hello-world), [Demo](https://arcs-hello-world.glitch.me).
2. **Web Video Player**. [Web](https://polymerlabs.github.io/arcs-cdn/dev/apps/web/?solo=https://noelutz.github.io/arcs-stories/0.2/VideoPlayer/VideoPlayer.recipes), [VR](https://polymerlabs.github.io/arcs-cdn/dev/apps/vr/?solo=https://noelutz.github.io/arcs-stories/0.2/VideoPlayer/Vr/VideoPlayer.recipes). In order to make the VR demo work you need to copy & paste the AMKEY from the Web to the VR demo.
3. **Chat**. BROKEN Request [Identity](https://noelutz.github.io/arcs-stories/artifacts/Identity.manifest). [Web](https://polymerlabs.github.io/arcs-cdn/dev/apps/web/?solo=https://noelutz.github.io/arcs-stories/artifacts/Chat/Chat.manifest)
