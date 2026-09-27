<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep optional Google/Meta tracking IDs in `src/lib/tracking.ts` and validate them before client-side insertion, because all pages including static exports share tags without exposing arbitrary script input.
- Load Google/Meta marketing tags only after the client-side regional consent decision; the head must not load them eagerly because it would transmit data before consent.
