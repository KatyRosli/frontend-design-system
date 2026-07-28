import {
  radiusTokens,
} from "./radius.constants";


export default function Radius() {

  return (

    <div className="
      space-y-8
    ">


      {radiusTokens.map((token) => (

        <div
          key={token.name}
          className="
            space-y-3
          "
        >

          <div className="
            flex
            items-center
            gap-6
          ">


            <div
              className={`
                size-24
                bg-primary
                ${token.className}
              `}
            />


            <div>

              <p className="
                font-medium
              ">
                {token.name}
              </p>


              <p className="
                text-sm
                text-text-secondary
              ">
                {token.value}
              </p>

            </div>


          </div>


          <p className="
            text-sm
            text-text-secondary
          ">
            {token.usage}
          </p>


        </div>

      ))}


    </div>

  );

}
