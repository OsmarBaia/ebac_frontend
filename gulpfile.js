import gulp from 'gulp';
import dartSass from 'sass'
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';

const sass = gulpSass(dartSass);

// Caminhos dos arquivos
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css',
  },
  images: {
    src: 'src/images/**/*.{jpg,jpeg,png,svg,gif}',
    dest: 'dist/images',
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js',
  },
};

// Tarefa: Compilação do SASS
export const compileSass = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
};

// Tarefa: Compressão de imagens
export const compressImages = () => {
  return gulp.src(paths.images.src).pipe(imagemin()).pipe(gulp.dest(paths.images.dest));
};

// Tarefa: Compressão de código JavaScript
export const compressJs = () => {
  return gulp.src(paths.scripts.src).pipe(uglify()).pipe(gulp.dest(paths.scripts.dest));
};

// Tarefa: Assistir alterações nos arquivos
export const watchFiles = () => {
  gulp.watch(paths.styles.src, compileSass);
  gulp.watch(paths.images.src, compressImages);
  gulp.watch(paths.scripts.src, compressJs);
};

// Tarefa padrão usando séries
const build = gulp.series(compileSass, compressImages, compressJs);

// Exportar tarefas
export default build;
