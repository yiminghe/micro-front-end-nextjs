# micro-front-end-nextjs

micro front end application using garfish and nextjs(with some patches)

## demo

```
pnpm install
pnpm dev
```

main app: http://localhost:3000/

nextjs app1: http://localhost:3001/app1

nextjs app2: http://localhost:3002/app2
## tech stack
### garfish

- cross app router
- fetch sub app entry html
- sandbox

### nextjs

- app router
- ssg/ssr （currently only works for ssg because of entry cache）
