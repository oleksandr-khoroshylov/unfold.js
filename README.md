# unfold.js

**unfold.js** is a minimalist JavaScript library (0 dependencies) for smooth slide up/down toggling of elements. It is a perfect lightweight alternative to jQuery’s slideToggle().

## ⚡ Features
- No dependencies (Vanilla JS)
- `slideUp`, `slideDown`, `slideToggle`
- `bind()` for automatic binding on click
- Small size, fast performance
- Works in all modern browsers

## 📦 Installation

### Via npm
```bash
npm install unfold.js
```

## Via сdn
```bash 
<script src="https://cdn.jsdelivr.net/npm/unfold.js@1.0.0/dist/unfold.min.js"></script>
```

## 🚀 Usage
```bash
import Unfold from 'unfold.js';
```

##  Main methods
```bash
Unfold.toggle(element);      // Toggles visibility
Unfold.up(element);          // Slides up (hides)
Unfold.down(element);        // Slides down (shows)
Unfold.bind('.item');        // Binds toggle on click to .item elements (expects .content inside)
```

## HTML example
```bash
<ul>
  <li class="item">
    Header
    <div class="content hidden">Content</div>
  </li>
</ul>
<script>
  Unfold.bind('.item');
</script>
```
