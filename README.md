# MCMNET Boilerplate

We've written our own custom boilerplate that suits our development needs. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Dependancies

Before you can run the boilerplate you'll need to first install the following dependancies to your global libraries

* NodeJS - https://nodejs.org/en/download/ 
* Grunt - https://gruntjs.com/getting-started
* Bower - https://bower.io/
* Ruby - https://rubyinstaller.org/ 
* Sass - http://sass-lang.com/install 


### Running the Boilerplate

Clone a copy of the boilerplate to your local Repos directory:

```
$ git clone https://github.com/Hemmersfield/mcmnet-boilerplate.git
```

Rename the project to suit your needs, e.g. 'my-new-website'


CD into the root and run the following command:

```
$ npm install && bower install
```

Once complete you are ready to to compile all base boilerplate dependancies into the root directories, e.g. jquery, normolizs.css This only needs to be done once, or any time you want to pull in more third party resources.

```
$ grunt generate
```

Now run the boilerplate:

```
$ grunt server
```

The boilerplate should be running a localhost server taking you into the root of the static directory. Take a look at the style guide, you can test the livereload by making changes to the example component in:

```
styles/components/_example.sass
```

## Authors

* **Dan Hemsley** - *Initial work*


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

