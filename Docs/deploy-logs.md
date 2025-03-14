[01:45:25.099] Cloning github.com/Nazary21/creators (Branch: main, Commit: 0ed6914)
[01:45:25.379] Skipping build cache, deployment was triggered without cache.
[01:45:28.583] Cloning completed: 3.482s
[01:45:29.101] Running build in Washington, D.C., USA (East) – iad1
[01:45:29.363] Running "vercel build"
[01:45:29.875] Vercel CLI 41.3.2
[01:45:30.295] Installing dependencies...
[01:45:53.571] 
[01:45:53.572] added 385 packages in 23s
[01:45:53.573] 
[01:45:53.573] 134 packages are looking for funding
[01:45:53.574]   run `npm fund` for details
[01:45:53.874] Detected Next.js version: 15.2.2
[01:45:53.884] Running "npm run build"
[01:45:54.167] 
[01:45:54.167] > archive-prototype@0.1.0 build
[01:45:54.168] > next build
[01:45:54.168] 
[01:45:55.509] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[01:45:55.510] This information is used to shape Next.js' roadmap and prioritize features.
[01:45:55.510] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[01:45:55.510] https://nextjs.org/telemetry
[01:45:55.511] 
[01:45:55.650]    ▲ Next.js 15.2.2
[01:45:55.652] 
[01:45:55.686]    Creating an optimized production build ...
[01:46:44.311]  ✓ Compiled successfully
[01:46:44.317]    Linting and checking validity of types ...
[01:46:50.715] 
[01:46:50.716] Failed to compile.
[01:46:50.717] 
[01:46:50.717] ./src/app/layout.tsx
[01:46:50.717] 2:10  Error: 'Inter' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.718] 
[01:46:50.718] ./src/app/page.tsx
[01:46:50.718] 14:10  Error: 'isCardsView' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[01:46:50.718] 14:23  Error: 'setIsCardsView' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[01:46:50.718] 15:10  Error: 'savedCreators' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[01:46:50.719] 16:10  Error: 'activeCreatorId' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[01:46:50.719] 
[01:46:50.719] ./src/app/profile/[id]/crm/page.tsx
[01:46:50.719] 5:42  Error: 'Badge' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.720] 5:49  Error: 'Statistic' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.721] 5:60  Error: 'Space' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.721] 5:67  Error: 'Tag' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.721] 5:72  Error: 'Avatar' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.721] 6:29  Error: 'CheckCircleFilled' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.722] 130:39  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.722] 
[01:46:50.722] ./src/app/profile/[id]/page.tsx
[01:46:50.722] 5:10  Error: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.722] 5:30  Error: 'Tabs' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.722] 47:39  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.723] 
[01:46:50.723] ./src/components/CreatorCard.tsx
[01:46:50.724] 105:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.724] 128:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.725] 133:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.725] 154:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.725] 163:25  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.727] 165:25  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.727] 
[01:46:50.728] ./src/components/CreatorProfile.tsx
[01:46:50.728] 12:3  Error: 'Row' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.728] 13:3  Error: 'Col' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.728] 14:3  Error: 'Divider' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.728] 17:3  Error: 'CheckCircleFilled' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.728] 30:8  Error: 'Link' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.728] 49:38  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[01:46:50.728] 409:71  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.728] 410:36  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.728] 417:93  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.728] 417:109  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.729] 417:134  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.729] 417:150  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.729] 433:35  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.729] 442:32  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.730] 
[01:46:50.730] ./src/components/FilterSidebar.tsx
[01:46:50.730] 2:22  Error: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.730] 5:3  Error: 'RightOutlined' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.731] 10:9  Error: 'Text' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[01:46:50.731] 
[01:46:50.731] ./src/components/ProfileDrawer.tsx
[01:46:50.731] 3:3  Error: 'CheckCircleFilled' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.732] 10:3  Error: 'InstagramOutlined' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.752] 14:3  Error: 'ExpandOutlined' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.754] 18:8  Error: 'Image' is defined but never used.  @typescript-eslint/no-unused-vars
[01:46:50.754] 121:6  Warning: React Hook useEffect has a missing dependency: 'handleClose'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
[01:46:50.755] 146:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 158:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 179:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 183:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 238:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 375:25  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 377:25  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 417:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 457:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 497:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.755] 536:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.756] 544:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.756] 552:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.756] 560:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.757] 589:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.757] 638:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.757] 653:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.757] 765:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[01:46:50.758] 796:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.758] 868:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.758] 
[01:46:50.758] ./src/components/Sidebar.tsx
[01:46:50.759] 63:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.759] 76:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[01:46:50.759] 
[01:46:50.759] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[01:46:50.785] Error: Command "npm run build" exited with 1
[01:46:51.342] 