# namste-react-dev
Practice for react dev 

# Useful commands

npm init (used to create package.json file). 

Fun fact NPM is not node package manager.

minify and clean up code and make it production ready

webpack,parcel are example of packaging tools.

-D dev dependency(only for development)

npm install -D parcel

Versions symbols:
^ automatically update to new minor version.
~ automatically update to new major version.

What is package-lock.json
- Used to store exact version of dependecy instead of apporximate
- Its have sha integrity check to avoid breakage of any changes
- Dependencies depends on package also added in this file.
- 

What is node_modules?
- Used to download all dependencies in folder
- Not only actual dependencies also its transitive dependency.
- Its not needed to put it on git , as it can recreated using package & package-lock.json files.

Whats NPX?
Executing a package then use NPX.


What/Why is parcel??
(https://parceljs.org/features/development/)
- Dev build
- local server
- HMR - hot module replacement
- File watching algorithm used to build on the fly.
- Caching - Faster builds (parcel-cache folder hold it)
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent hashing
- Code Splitting
- Differential bundling(Packinng app based on browser Ex: Firefox Legacy, firefox latest)
- Diagnostics
- HTTPS 
- Tree shaking (remove unused code give better optimized package)
- Different dev and prod build
	Dev Build:
	- npx parcel index.html

	Prod Build: 
	- npx parcel build index.html
- Dist folder contains actual binaries or index.html to be run.
- parcel-cache used to for file changing algorith to do hot code reload.


Adding react dependency via npm
CDN links on index.html is not good way to do it.Everytime it will download.


Why NVM used??

Install NVM for node version management script like SDK man.
https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

https://medium.com/@priscillashamin/how-to-install-and-configure-nvm-on-mac-os-43e3366c75a6









