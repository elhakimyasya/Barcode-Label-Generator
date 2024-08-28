const gulp = require('gulp');
const gulpCleanCSS = require('gulp-clean-css');
const gulpReplace = require('gulp-replace');

gulp.task('styles:minify', async () => {
    const { default: gulpAutoprefixer } = await import('gulp-autoprefixer');
    // Process CSS files in build/styles directory
    return gulp.src('./build/styles/*.css').pipe(gulpAutoprefixer({
        cascade: false // Disable cascading prefixes for better readability
    })).pipe(gulpCleanCSS({
        level: {
            1: {
                specialComments: 0, // Remove all special comments
                tidySelectors: false // Disable selector optimizations for compatibility
            },
            2: {
                restructureRules: false, // Avoid unnecessary restructuring
                mergeSemantically: false // Avoid merging rules that could affect CSS variables
            }
        },
        compatibility: {
            properties: {
                variables: false // Do not remove CSS variables
            }
        }
    })).pipe(gulpReplace('--tw-', '--elcreative-')).pipe(gulp.dest('./build/styles'));
});

gulp.task('scripts:minify', () => {
    return gulp.src([
        './build/scripts/*.js',
    ]).pipe(gulpReplace("https://elcreative.net/api/products-licensed-websites", (match) => {
        return `${base64.encode(match)}`;
    })).pipe(gulpReplace("https://elcreative.net/", (match) => {
        return `${base64.encode(match)}`;
    })).pipe(gulpBabel({
        configFile: './.babelrc' // Use .babelrc configuration file
    })).pipe(gulpBabelMinify({
        mangle: {
            keepClassName: true, // Preserve class names during minification
        },
        builtIns: false, // Do not add polyfills for built-in methods
        evaluate: false, // Do not evaluate expressions
        removeConsole: true, // Remove console.* statements
        removeDebugger: true // Remove debugger statements
    })).pipe(gulp.dest('./build/scripts'));
});

gulp.task('watch', gulp.series(
    'styles:minify',
    // 'scripts:minify',
    // 'json:minify',
    // 'json:replace',
    // 'start',
    // 'bundle:templates'
));