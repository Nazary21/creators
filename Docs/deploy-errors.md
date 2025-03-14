[23:27:50.995] Cloning github.com/Nazary21/creators (Branch: main, Commit: 0ed6914)
[23:27:51.005] Skipping build cache, deployment was triggered without cache.
[23:27:52.708] Cloning completed: 1.713s
[23:27:53.030] Running build in Washington, D.C., USA (East) – iad1
[23:27:53.253] Running "vercel build"
[23:27:53.798] Vercel CLI 41.3.2
[23:27:54.205] Installing dependencies...
[23:28:15.192] 
[23:28:15.193] added 385 packages in 21s
[23:28:15.193] 
[23:28:15.194] 134 packages are looking for funding
[23:28:15.194]   run `npm fund` for details
[23:28:15.281] Detected Next.js version: 15.2.2
[23:28:15.288] Running "npm run build"
[23:28:15.441] 
[23:28:15.442] > archive-prototype@0.1.0 build
[23:28:15.442] > next build
[23:28:15.442] 
[23:28:16.206] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[23:28:16.207] This information is used to shape Next.js' roadmap and prioritize features.
[23:28:16.207] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[23:28:16.207] https://nextjs.org/telemetry
[23:28:16.208] 
[23:28:16.341]    ▲ Next.js 15.2.2
[23:28:16.341] 
[23:28:16.379]    Creating an optimized production build ...
[23:29:04.650]  ✓ Compiled successfully
[23:29:04.656]    Linting and checking validity of types ...
[23:29:10.413] 
[23:29:10.419] Failed to compile.
[23:29:10.419] 
[23:29:10.420] ./src/app/layout.tsx
[23:29:10.420] 2:10  Error: 'Inter' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.420] 
[23:29:10.420] ./src/app/page.tsx
[23:29:10.421] 14:10  Error: 'isCardsView' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[23:29:10.421] 14:23  Error: 'setIsCardsView' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[23:29:10.422] 15:10  Error: 'savedCreators' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[23:29:10.424] 16:10  Error: 'activeCreatorId' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[23:29:10.424] 
[23:29:10.424] ./src/app/profile/[id]/crm/page.tsx
[23:29:10.425] 5:42  Error: 'Badge' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.425] 5:49  Error: 'Statistic' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.425] 5:60  Error: 'Space' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.426] 5:67  Error: 'Tag' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.426] 5:72  Error: 'Avatar' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.430] 6:29  Error: 'CheckCircleFilled' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.431] 130:39  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.431] 
[23:29:10.431] ./src/app/profile/[id]/page.tsx
[23:29:10.432] 5:10  Error: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.432] 5:30  Error: 'Tabs' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.432] 47:39  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.433] 
[23:29:10.433] ./src/components/CreatorCard.tsx
[23:29:10.433] 105:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.434] 128:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.434] 133:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.435] 154:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.435] 163:25  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.450] 165:25  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.450] 
[23:29:10.451] ./src/components/CreatorProfile.tsx
[23:29:10.451] 12:3  Error: 'Row' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.451] 13:3  Error: 'Col' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.452] 14:3  Error: 'Divider' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.452] 17:3  Error: 'CheckCircleFilled' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.452] 30:8  Error: 'Link' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.453] 49:38  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[23:29:10.453] 409:71  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.453] 410:36  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.454] 417:93  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.454] 417:109  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.454] 417:134  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.455] 417:150  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.455] 433:35  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.455] 442:32  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.456] 
[23:29:10.456] ./src/components/FilterSidebar.tsx
[23:29:10.456] 2:22  Error: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.456] 5:3  Error: 'RightOutlined' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.457] 10:9  Error: 'Text' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[23:29:10.457] 
[23:29:10.457] ./src/components/ProfileDrawer.tsx
[23:29:10.458] 3:3  Error: 'CheckCircleFilled' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.458] 10:3  Error: 'InstagramOutlined' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.458] 14:3  Error: 'ExpandOutlined' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.459] 18:8  Error: 'Image' is defined but never used.  @typescript-eslint/no-unused-vars
[23:29:10.459] 121:6  Warning: React Hook useEffect has a missing dependency: 'handleClose'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
[23:29:10.459] 146:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.460] 158:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.460] 179:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.460] 183:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.461] 238:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.461] 375:25  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.461] 377:25  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.461] 417:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.462] 457:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.462] 497:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.466] 536:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.466] 544:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.467] 552:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.467] 560:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.467] 589:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.467] 638:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.468] 653:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.468] 765:60  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[23:29:10.468] 796:11  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.469] 868:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.469] 
[23:29:10.469] ./src/components/Sidebar.tsx
[23:29:10.470] 63:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.470] 76:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[23:29:10.470] 
[23:29:10.470] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[23:29:10.499] Error: Command "npm run build" exited with 1
[23:29:10.994] 