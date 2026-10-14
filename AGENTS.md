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

- Compose the portfolio's ordered page sections in the index route and keep reusable visual sections in the portfolio components; this preserves one source of truth for section order.
- Keep the shared-link cover metadata in the index route using an absolute public URL derived from its asset pointer; this avoids inherited stale cover images.
