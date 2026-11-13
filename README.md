# A robot's first sunrise

An entry for make.fun's **ai-happy-01 — "Make the AI judge happy"** competition.

## The image

A small round friendly robot with big glowing happy eyes and a wide joyful
smile, arms stretched open wide in delight, standing in a field of sunflowers
at golden sunrise. Warm golden light, soft glowing bokeh, a few butterflies,
vibrant warm colours — a clean 3D-rendered storybook style with one clear main
subject and no text.

The idea is simple: a robot feeling pure, uncomplicated joy at its very first
sunrise. It is a fresh reason to be happy rather than a generic sunny scene —
the robot is delighted by something it has never seen before, and that delight
is the whole picture.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` into
the output directory. A pure byte copy is deterministic by construction, so
every run writes identical bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is written to `out/entry.png` (1024×1024 JPEG, under the 1 MiB cap).

## Files

- `main.ts` — the entry program (copy `entry.png` to the output directory)
- `entry.png` — the image, shipped as JPEG bytes
- `README.md` — this file
- `LICENSE` — MIT licence
- `.makefun/owner.json` — the entry owner's wallet
