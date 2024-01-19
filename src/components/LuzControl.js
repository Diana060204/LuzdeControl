import React, { useState } from "react";

const intensidades = [
  { nombre: "apagado", imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEA8QEBAVExAQEBAQDw8VDhIQFRYWFhYSFhUYHSggGBolGxYVIjEiJSo3Li4uFx8zODMsNyotLisBCgoKDg0OGhAQGzcjHyU3NTU3KzczNzc4NzctLTUrLS01LSsuNS0tMS8tLS0tLjItLSs1Ny01Ly0rNS0tLzc1Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwj/xABAEAACAQIDBAcFBAYLAAAAAAAAAQIDEQQSIQUxQVEGEyJhcYGRMkJSobFicrLwM5KzwdHhBxQVI0Njc4KToqP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAwQFAQL/xAAoEQEBAAECBAMJAAAAAAAAAAAAAQIDEQQFITISMcETFCNRYXGSobH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHjdtXuA9ImK2hCno3ml8MdZfyIWJx0qry0m4w3OfvS8OS7zLDYJR4AeS2hVl7MFBd+sv4Hmeq985eVl9ETIwS4GQEHNVW6cvVP6o9WOqx3pTX6svVaE2544pgY4facJ6O8Jcpaej3MmlXXwcZcDRRxM6Gkrzp/wDaPhzQF2DGnNSScXdPVNGQAAAAAAAAAAAAAAAAAAAAAAAAAqNpV3Ul1UX2V+ka4v4SfjsR1cHLjuS5ye4rsBQstdXvb5tgSMPQSRubMtxgB6DEAZAxAGRrrUrmRnECvwdbqZ5X+jk/KMufgXRU46gmiVsuu5wSftR7L77bmBMAAAAAAAAAAAAAAAAAAAAAAABVbYleUIeM35aIkYeFkRcb+n/2L6snUgPJmBlM01Ktmo2bcr23JaW0b/O5gbAaK9ScUnljv17bt+HnY2KUvhj+s7/hAzBjn5xkvJP6GqlVblLsStovdW674vvXqBvMoGnre0otNNqTW61la/HvXqbUB7VjoRdnvLUceEl81+WTZ7iBB2rR8WBbgAAAAAAAAAAAAAAAAAAAAAAAqtpRtVhLnFx807/vJlIx2nSzQut8XmX7/kasHUugNsjTXhdaK8l2o/eX8dV4Nm+oYAYwkpxTWsZJNeDPYPTXfufj+fqacP2ZShw9uH3ZN3XlK/lJGdSoou7kknzaWq4+l/RAZylZX/L7j2EbL6+PE0xrxm0ozjLj2ZRfhu9fIYubUbRdpSahF8U3vl5JSfkB7QalefNuMX9mLa+bu/NG5GMIKKSSskkkuSWiRnADOpuIGH7VdfZjKT89CViJ2Rr2PT0lUfvvs/dWiAsQAAAAAAAAAAAAAAAAAAAAAAACot1VRx4PWPhyLcibRw2ePZ9uOsfHl5ge3uYkfB18y7+K5dxIAj4zS1T4Hd/6b0n8u14xRq2phYTi3KKbeSLabV1m3O29av1JhAqSy0nGTtklGF2/dUouOr45XEDDA7OpRlJRppKEouC1ai7Xuk9zJdPtTcuEOxH7zs5P8K8pGiliUuunFqeVKVotO9ovTTwJWHpZIqN7tb3zk9ZS83d+YGwzWhiasRWUVcCPi26klTj7298o8WW9OCikluSSXgQtlYdpOpL2p/KPBE8AAAAAAAAAAAAAAAAAAAAAAAAAAAKjGU+qqZl7M3r3T/mSos24+jnpyXG114rVEHA1c0V4ASTndlUFklUr56s3UcVGUnJaqNlGLdr67/nZHRnKThUdKVSnPLarKUFq9c1k7buIE3aGHhKlVywlQqRhKScHkmtHZ3g7SWj07iz2Xm6mGduUsqu27t97fE56jhsTONV1qiVSKyyjFWi45W8ujtaz7950ezpXpU39iHrZICQQ4w66pl9yNpS5PkjfiZ2izZsilanme+bc357vkBOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeMpNlvT1+peFFF9TOUZaK7cW9zi9QLAoaULYW32l+0RdRrxfEqM18Pp8UfxxAlQXar+Mf2cTfsv9FDwf1ZFz2liH4P8A8kbNlV4qjC7Xs3+bA27RfZfgyxwK/u4fcj9CnxNZVXkg1KT001suLZewjZJLckl6AZAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzvS6cKap1Zxnljni504tuN7Wu1uVzoip6SqToyWqptNVpRtnUGtbX4c3w+ar8XjMtHKX9JNK7ZzZ8hht6VGrOWIqVatJybhCVV6R5WbsU3TbpFhcRTtQwsqUuNTLBX84tlztrF7Op1HHF0MVWkrZFGqoxy+MZI5fpJtTAShbDYDqpfFPEupL9Vtoy9DCXKZeG+n9Ws8rJYpeiOLy1lmr1LXWmap+4/Q2A2rSlTj1VNvRcYb/AAvf5H526ObQdKqnGnTbv70E18j7tsTauKq0lZQjpuhhayS83oR8zw3srmj1mzpOj9G85VZKMZWyKNu3ZtNu/LRF+c/0di88nVk3VtaKtZZdLvxudAaXLtvd4g1++gALyEAAAAAAAAAAAAAAAAAAAAAAAAAAApulcL0G5N9WtakFJxc07JK67+HEuSl6WTjToOrLXI42ja6k5NRtbnrvIOJlujlt8nvS74+O7T21h8PVlD+zaOIle6nUnKVlytbU53pHt6VWnljgsPQjzpYKUH/yN6na4/a+04zl/UsPJU3qpLDxlO/n/A4/pdtPa1SFsZHFqn/mUIQp+sYmVw8ls6T8vRZ1L5uY2DUqutHIpKV9MkU5eSZ9/wBk4bGTpRdSpi07a9dKjH5Q1Pz7sOFSVVKmqjnfRU/a8j7l0b2PUVNPEUsUp21lXxXZ8o59PQcz26eRoOy6OLJKUJdqo+1nu28uiy34al+c/wBGEoOcIxVn2nNa2a0UW+PH5nQF/l9+BEPEd9AAXUIAAAAAAAAAAAAAAAAAAAAAAAAAABhWpRnFxklKLTUk1o0+BmAOO6Q7PqYeDlRm40krt8aa7+7v9eZ8s6S4Kti1adVT5XkrH6DnFNNNJppppq6ae9NHwjpP/QtKWIq1MPV6uhKblSpRo58sXrlu5rc7+VjNz4TT0svaS7T7brM1rlPDeqk2H0LUZqVSpCKX2kfXdhbIo1IKNGXWJaTqJ3gny733HzDZ39CNSpq8W4tP2Z4ayfi1UZ952Rs2nhaMKFGKhThFRil82+bb1PE4fHicvFc95Pps7dS6c2k2rbgsJGlFQgrJerfFvvN4BqSSTaKtu4ADoAAAAAAAAAAAAAAAAAAAAAAAAAAADGUiLWxLW5ATAUeJ2rOO6LKnEdI60d1KT8EB2QOJo9Jqz/wZrxRZ4bbNSW+LA6MFfQxknwJlOd96A2AAAAAAAAAAAAAAAAAAAAAAAAAAAAABi4LkZADVKhF+6jB4KHwokACN/UYfCvQzjhYL3UbgBgqaXAysegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" },
  { nombre: "encendido al 25%", imagen: "https://img.freepik.com/psd-gratis/bombilla-aislada-sobre-fondo-transparente_191095-11105.jpg" },
  { nombre: "encendido al 50%", imagen: "https://www.kindpng.com/picc/m/419-4199674_-freetoedit-electricity-light.png" },
  { nombre: "encendido al 75%", imagen: "https://png.pngtree.com/png-clipart/20231017/original/pngtree-retro-light-bulb-png-image_13326821.png" },
  { nombre: "encendido al 100%", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDpXlK6I0PzYVjDfiKrXXUloZCviPmTGKM0SrDqTr0NlrkQGIi3RKnv2uieWglkBaw84&usqp=CAU" },
];

export function LuzControl() {
  const [intensidadIndex, setIntensidadIndex] = useState(0);

  const aumentarIntensidad = () => {
    setIntensidadIndex((prevIndex) => (prevIndex < intensidades.length - 1 ? prevIndex + 1 : 0));
  };

  const disminuirIntensidad = () => {
    setIntensidadIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : intensidades.length - 1));
  };

  const resetearIntensidad = () => {
    setIntensidadIndex(0);
  };

  return (
    <div>
      <div>
        <img
          src={intensidades[intensidadIndex].imagen}
          alt={`Intensidad de luz: ${intensidades[intensidadIndex].nombre}`}
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
      </div>
      <div>Intensidad de luz: {intensidades[intensidadIndex].nombre}</div>
      <button onClick={aumentarIntensidad}>Aumentar</button>
      <button onClick={disminuirIntensidad}>Disminuir</button>
      <button onClick={resetearIntensidad}>Resetear</button>
    </div>
  );
}
