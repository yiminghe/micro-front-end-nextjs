# micro-front-end-nextjs

micro front end application using garfish and nextjs(with a single line patch)

## demo

```
pnpm install
pnpm dev
```

main app: http://localhost:3000/   https://micro-front-end-nextjs-main.vercel.app/

nextjs app1: http://localhost:3001/app1   https://micro-front-end-nextjs-app1.vercel.app/app1

nextjs app2: http://localhost:3002/app2  https://micro-front-end-nextjs-app2.vercel.app/app2
## tech stack
### garfish

- cross app router
- fetch sub app entry html
- sandbox

### nextjs

- app router
- ssg/ssr （currently only works for ssg because of entry cache）
