export default function redirect(url) {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  } else {
    console.error(
      'Redirect function called without a window object and no server response object available.'
    );
  }
}