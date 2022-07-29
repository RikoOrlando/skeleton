export default {
  description: "UI component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name please",
      validate: (value) => {
        const isFirstLetterUppercase = /^[A-Z]/.test(value);
        if (!isFirstLetterUppercase) {
          return "First letter must uppercase";
        } else if (!value) {
          return "The name is required";
        }
        return true;
      },
    },
  ],
  actions: [
    {
      type: "add",
      path: "../src/components/{{name}}/index.tsx",
      templateFile: "./templates/component.hbs",
      skipIfExists: true,
    },
  ],
};
