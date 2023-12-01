const pattern = new RegExp("^[0-9a-fA-F]{24}$");
export default function validateId(id: string) {
  return pattern.test(id);
}
